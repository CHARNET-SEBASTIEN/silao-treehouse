import { createServer } from "node:http";
import { request as httpsRequest } from "node:https";

const API_PORT = Number(process.env.CONTACT_API_PORT ?? 8787);
const MAILPACE_API_URL =
  process.env.MAILPACE_API_URL ?? "https://app.mailpace.com/api/v1/send";
const MAILPACE_SERVER_TOKEN =
  process.env.MAILPACE_SERVER_TOKEN ?? "69ddf9b2-073e-4f4d-8073-022a6da4bee1";
const MAILPACE_DEBUG =
  (process.env.MAILPACE_DEBUG ?? "false").toLowerCase() === "true";
const CONTACT_TO = process.env.CONTACT_TO ?? "contact@silao.fr";
const CONTACT_FROM = process.env.CONTACT_FROM ?? "contact@silage.fr";
const SITE_URL = process.env.SITE_URL ?? "https://www.silao.fr";
const SITE_NAME = process.env.SITE_NAME ?? "SILAO";
const CONTACT_MIN_FORM_FILL_MS = Number(
  process.env.CONTACT_MIN_FORM_FILL_MS ?? 2500,
);
const CONTACT_MAX_FORM_AGE_MS = Number(
  process.env.CONTACT_MAX_FORM_AGE_MS ?? 43_200_000,
);
const CONTACT_RATE_LIMIT_WINDOW_MS = Number(
  process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 900_000,
);
const CONTACT_RATE_LIMIT_MAX_REQUESTS = Number(
  process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS ?? 5,
);
const rateLimitByIp = new Map();

const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0;
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const hasMaxLength = (value, maxLength) => value.length <= maxLength;

const sanitizeHeaderValue = (value) => value.replace(/[\r\n]/g, " ").trim();
const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const nl2br = (value) => escapeHtml(value).replace(/\r?\n/g, "<br />");
const getClientIp = (request) => {
  const forwardedFor = request.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.socket.remoteAddress ?? "unknown";
};

const isWithinExpectedTimeWindow = (startedAt) => {
  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return false;
  }

  const elapsedMs = Date.now() - startedAt;
  return (
    elapsedMs >= CONTACT_MIN_FORM_FILL_MS &&
    elapsedMs <= CONTACT_MAX_FORM_AGE_MS
  );
};

const pruneRateLimitStore = (now) => {
  for (const [clientIp, timestamps] of rateLimitByIp.entries()) {
    const recentTimestamps = timestamps.filter(
      (timestamp) => now - timestamp < CONTACT_RATE_LIMIT_WINDOW_MS,
    );

    if (recentTimestamps.length === 0) {
      rateLimitByIp.delete(clientIp);
      continue;
    }

    rateLimitByIp.set(clientIp, recentTimestamps);
  }
};

const isRateLimited = (clientIp) => {
  const now = Date.now();
  pruneRateLimitStore(now);
  const timestamps = rateLimitByIp.get(clientIp) ?? [];
  const recentTimestamps = [...timestamps, now];

  rateLimitByIp.set(clientIp, recentTimestamps);
  return recentTimestamps.length > CONTACT_RATE_LIMIT_MAX_REQUESTS;
};

const formatMessage = (payload) =>
  [
    "Nouvelle demande de démonstration SILAO",
    "",
    `Nom : ${payload.lastName}`,
    `Prénom : ${payload.firstName}`,
    `Email : ${payload.email}`,
    `Organisation : ${payload.organization}`,
    `Téléphone : ${payload.phone || "Non renseigné"}`,
    "",
    "Message :",
    payload.message || "Aucun message complémentaire.",
  ].join("\n");

const formatHtmlMessage = (payload) => {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const messageHtml = payload.message
    ? nl2br(payload.message)
    : '<span style="color:#667085;">Aucun message complémentaire.</span>';

  const details = [
    { label: "Nom", value: escapeHtml(payload.lastName) },
    { label: "Prénom", value: escapeHtml(payload.firstName) },
    {
      label: "Email",
      value: `<a href="mailto:${encodeURI(payload.email)}" style="color:#00b8e6;text-decoration:none;">${escapeHtml(payload.email)}</a>`,
    },
    { label: "Organisation", value: escapeHtml(payload.organization) },
    { label: "Téléphone", value: escapeHtml(payload.phone || "Non renseigné") },
  ];

  const detailRows = details
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:0 0 10px 0;width:140px;vertical-align:top;font:700 13px/20px Arial,Helvetica,sans-serif;color:#31317c;">
            ${label}
          </td>
          <td style="padding:0 0 10px 0;vertical-align:top;font:400 14px/20px Arial,Helvetica,sans-serif;color:#25324b;">
            ${value}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#f7fbff;color:#25324b;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;background:#f7fbff;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;max-width:680px;border-collapse:collapse;">
            <tr>
              <td style="padding:0 0 16px 0;">
                <div style="display:inline-block;background:#ffe600;color:#31317c;border-radius:999px;padding:8px 14px;font:800 11px/1 Arial,Helvetica,sans-serif;letter-spacing:0.16em;text-transform:uppercase;">
                  Demande de démonstration
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#ffffff;border:1px solid #d5dfec;border-radius:28px;overflow:hidden;box-shadow:0 18px 42px rgba(49,49,124,0.10);">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:28px;background:linear-gradient(135deg,#00b8e6 0%,#2ec3eb 58%,#f07d00 100%);">
                      <div style="font:900 28px/1 Arial,Helvetica,sans-serif;color:#ffffff;letter-spacing:0.01em;">
                        ${SITE_NAME}
                      </div>
                      <div style="padding-top:10px;font:700 18px/26px Arial,Helvetica,sans-serif;color:#ffffff;">
                        Nouvelle prise de contact transmise depuis le site
                      </div>
                      <div style="padding-top:8px;font:400 14px/22px Arial,Helvetica,sans-serif;color:rgba(255,255,255,0.92);">
                        Un prospect souhaite être recontacté pour une démonstration.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:22px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                        <tr>
                          <td style="padding:0 0 14px 0;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                              <tr>
                                <td style="background:#f2f7fc;border-radius:22px;padding:22px;">
                                  <div style="font:800 12px/1 Arial,Helvetica,sans-serif;color:#f07d00;letter-spacing:0.16em;text-transform:uppercase;">
                                    Contact
                                  </div>
                                  <div style="padding-top:10px;font:700 26px/32px Arial,Helvetica,sans-serif;color:#31317c;">
                                    ${escapeHtml(fullName)}
                                  </div>
                                  <div style="padding-top:4px;font:400 15px/22px Arial,Helvetica,sans-serif;color:#667085;">
                                    ${escapeHtml(payload.organization)}
                                  </div>
                                  <div style="padding-top:18px;">
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                                      ${detailRows}
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 0 14px 0;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                              <tr>
                                <td style="background:#ffffff;border:1px solid #d5dfec;border-radius:22px;padding:22px;">
                                  <div style="font:800 12px/1 Arial,Helvetica,sans-serif;color:#00b8e6;letter-spacing:0.16em;text-transform:uppercase;">
                                    Message
                                  </div>
                                  <div style="padding-top:12px;font:400 15px/24px Arial,Helvetica,sans-serif;color:#25324b;">
                                    ${messageHtml}
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 8px 0 8px;font:400 12px/19px Arial,Helvetica,sans-serif;color:#667085;text-align:center;">
                Message généré automatiquement depuis le formulaire public de démonstration ${SITE_NAME}.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

const sendMailMailPace = ({ from, to, replyTo, subject, text, html }) =>
  new Promise((resolve, reject) => {
    if (!MAILPACE_SERVER_TOKEN) {
      reject(new Error("MAILPACE_SERVER_TOKEN is not configured"));
      return;
    }

    const body = JSON.stringify({
      from: sanitizeHeaderValue(from),
      to: sanitizeHeaderValue(to),
      subject,
      textbody: text,
      htmlbody: html,
      replyto: sanitizeHeaderValue(replyTo),
    });

    const url = new URL(MAILPACE_API_URL);
    const req = httpsRequest(
      {
        protocol: url.protocol,
        hostname: url.hostname,
        port: url.port || 443,
        path: `${url.pathname}${url.search}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
          "MailPace-Server-Token": MAILPACE_SERVER_TOKEN,
        },
      },
      (response) => {
        let raw = "";
        response.setEncoding("utf8");

        response.on("data", (chunk) => {
          raw += chunk;
        });

        response.on("end", () => {
          if (MAILPACE_DEBUG) {
            console.log("[mailpace]", response.statusCode, raw);
          }

          if (
            (response.statusCode ?? 500) < 200 ||
            (response.statusCode ?? 500) >= 300
          ) {
            reject(
              new Error(
                `MailPace request failed (${response.statusCode ?? "unknown"}): ${raw || "empty response"}`,
              ),
            );
            return;
          }

          try {
            resolve(raw ? JSON.parse(raw) : null);
          } catch {
            resolve(raw || null);
          }
        });
      },
    );

    req.setTimeout(10_000, () => {
      req.destroy(new Error("MailPace timeout"));
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });

const readJsonBody = async (request) => {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 1_000_000) {
      throw new Error("Payload too large");
    }
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return JSON.parse(rawBody);
};

const isValidPayload = (payload) =>
  isNonEmptyString(payload.lastName) &&
  isNonEmptyString(payload.firstName) &&
  isEmail(payload.email) &&
  isNonEmptyString(payload.organization) &&
  hasMaxLength(payload.lastName, 100) &&
  hasMaxLength(payload.firstName, 100) &&
  hasMaxLength(payload.email, 255) &&
  hasMaxLength(payload.organization, 150) &&
  hasMaxLength(payload.phone, 30) &&
  hasMaxLength(payload.message, 5000);

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204, jsonHeaders);
    response.end();
    return;
  }

  if (request.url !== "/api/contact" || request.method !== "POST") {
    response.writeHead(404, jsonHeaders);
    response.end(JSON.stringify({ success: false, error: "Not found" }));
    return;
  }

  try {
    const body = await readJsonBody(request);
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      response.writeHead(429, jsonHeaders);
      response.end(
        JSON.stringify({ success: false, error: "Too many requests" }),
      );
      return;
    }

    const payload = {
      lastName: (body.lastName ?? "").toString().trim(),
      firstName: (body.firstName ?? "").toString().trim(),
      email: (body.email ?? "").toString().trim(),
      organization: (body.organization ?? "").toString().trim(),
      phone: (body.phone ?? "").toString().trim(),
      message: (body.message ?? "").toString().trim(),
      website: (body.website ?? "").toString().trim(),
      startedAt: Number(body.startedAt ?? Number.NaN),
    };

    if (payload.website || !isWithinExpectedTimeWindow(payload.startedAt)) {
      response.writeHead(422, jsonHeaders);
      response.end(
        JSON.stringify({ success: false, error: "Spam protection triggered" }),
      );
      return;
    }

    if (!isValidPayload(payload)) {
      response.writeHead(422, jsonHeaders);
      response.end(
        JSON.stringify({ success: false, error: "Invalid request payload" }),
      );
      return;
    }

    await sendMailMailPace({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: payload.email,
      subject: `Demande de démonstration SILAO - ${payload.organization}`,
      text: formatMessage(payload),
      html: formatHtmlMessage(payload),
    });

    response.writeHead(200, jsonHeaders);
    response.end(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("[contact-api]", error);
    response.writeHead(500, jsonHeaders);
    response.end(
      JSON.stringify({ success: false, error: "Unable to send email" }),
    );
  }
});

server.listen(API_PORT, () => {
  console.log(`[contact-api] listening on http://localhost:${API_PORT}`);
  console.log(`[contact-api] mailpace=${MAILPACE_API_URL}, to=${CONTACT_TO}`);
});
