<?php

$defaultConfig = [
    "dry_run" => false,
    "debug" => false,
    "mailpace_api_url" => "https://app.mailpace.com/api/v1/send",
    "mailpace_server_token" => "",
    "contact_to" => "contact@silao.fr",
    "contact_from" => "contact@silao.fr",
    "site_url" => "https://www.silao.fr",
    "site_name" => "SILAO",
    "use_php_mail_fallback" => true,
];

$config = $defaultConfig;

$configCandidates = [
    __DIR__ . "/contact-config.php",
    dirname(__DIR__, 2) . "/private/contact-config.php",
];

foreach ($configCandidates as $configPath) {
    if (!is_file($configPath)) {
        continue;
    }

    $loadedConfig = require $configPath;
    if (is_array($loadedConfig)) {
        $config = array_merge($config, $loadedConfig);
    }
}

function contact_respond_json($statusCode, $payload)
{
    http_response_code($statusCode);
    header("Content-Type: application/json; charset=utf-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept");
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function contact_is_non_empty_string($value)
{
    return is_string($value) && trim($value) !== "";
}

function contact_has_max_length($value, $maxLength)
{
    $stringValue = (string) $value;
    if (function_exists("mb_strlen")) {
        return mb_strlen($stringValue) <= $maxLength;
    }

    return strlen($stringValue) <= $maxLength;
}

function contact_is_email($value)
{
    return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}

function contact_escape_html($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8");
}

function contact_nl2br_safe($value)
{
    return nl2br(contact_escape_html($value), false);
}

function contact_build_text_message($payload)
{
    return implode("\n", [
        "Nouvelle demande de démonstration SILAO",
        "",
        "Nom : " . $payload["lastName"],
        "Prénom : " . $payload["firstName"],
        "Email : " . $payload["email"],
        "Organisation : " . $payload["organization"],
        "Téléphone : " . ($payload["phone"] ?: "Non renseigné"),
        "",
        "Message :",
        $payload["message"] ?: "Aucun message complémentaire.",
    ]);
}

function contact_build_html_message($payload, $config)
{
    $fullName = trim($payload["firstName"] . " " . $payload["lastName"]);
    $messageHtml = $payload["message"]
        ? contact_nl2br_safe($payload["message"])
        : '<span style="color:#667085;">Aucun message complémentaire.</span>';

    $details = [
        ["label" => "Nom", "value" => contact_escape_html($payload["lastName"])],
        ["label" => "Prénom", "value" => contact_escape_html($payload["firstName"])],
        [
            "label" => "Email",
            "value" => '<a href="mailto:' . rawurlencode($payload["email"]) . '" style="color:#00b8e6;text-decoration:none;">' . contact_escape_html($payload["email"]) . "</a>",
        ],
        ["label" => "Organisation", "value" => contact_escape_html($payload["organization"])],
        ["label" => "Téléphone", "value" => contact_escape_html($payload["phone"] ?: "Non renseigné")],
    ];

    $detailRows = "";
    foreach ($details as $detail) {
        $detailRows .= '
        <tr>
          <td style="padding:0 0 10px 0;width:140px;vertical-align:top;font:700 13px/20px Arial,Helvetica,sans-serif;color:#31317c;">
            ' . $detail["label"] . '
          </td>
          <td style="padding:0 0 10px 0;vertical-align:top;font:400 14px/20px Arial,Helvetica,sans-serif;color:#25324b;">
            ' . $detail["value"] . '
          </td>
        </tr>';
    }

    return '<!DOCTYPE html>
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
                        ' . contact_escape_html($config["site_name"]) . '
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
                                    ' . contact_escape_html($fullName) . '
                                  </div>
                                  <div style="padding-top:4px;font:400 15px/22px Arial,Helvetica,sans-serif;color:#667085;">
                                    ' . contact_escape_html($payload["organization"]) . '
                                  </div>
                                  <div style="padding-top:18px;">
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                                      ' . $detailRows . '
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
                                    ' . $messageHtml . '
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
                              <tr>
                                <td style="background:#fff8d6;border:1px solid #ffe08a;border-radius:20px;padding:18px 22px;">
                                  <div style="font:700 14px/22px Arial,Helvetica,sans-serif;color:#31317c;">
                                    Action recommandée
                                  </div>
                                  <div style="padding-top:6px;font:400 14px/22px Arial,Helvetica,sans-serif;color:#4a5874;">
                                    Répondez directement à cet email pour contacter ' . contact_escape_html($fullName) . ' ou consultez le site pour préparer l’échange.
                                  </div>
                                  <div style="padding-top:16px;">
                                    <a href="' . contact_escape_html($config["site_url"]) . '" style="display:inline-block;background:#31317c;color:#ffffff;text-decoration:none;border-radius:999px;padding:12px 18px;font:700 14px/1 Arial,Helvetica,sans-serif;">
                                      Ouvrir le site SILAO
                                    </a>
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
                Message généré automatiquement depuis le formulaire public de démonstration ' . contact_escape_html($config["site_name"]) . '.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>';
}

function contact_send_with_mailpace($payload, $config)
{
    $requestBody = json_encode([
        "from" => $config["contact_from"],
        "to" => $config["contact_to"],
        "subject" => "Demande de démonstration SILAO - " . $payload["organization"],
        "textbody" => contact_build_text_message($payload),
        "htmlbody" => contact_build_html_message($payload, $config),
        "replyto" => $payload["email"],
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    if (function_exists("curl_init")) {
        $ch = curl_init($config["mailpace_api_url"]);
        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $requestBody,
            CURLOPT_HTTPHEADER => [
                "Accept: application/json",
                "Content-Type: application/json",
                "Content-Length: " . strlen($requestBody),
                "MailPace-Server-Token: " . $config["mailpace_server_token"],
            ],
            CURLOPT_TIMEOUT => 10,
        ]);

        $responseBody = curl_exec($ch);
        $statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
            throw new Exception("MailPace request failed: " . ($curlError ?: $responseBody ?: "empty response"));
        }

        return;
    }

    $context = stream_context_create([
        "http" => [
            "method" => "POST",
            "header" => implode("\r\n", [
                "Accept: application/json",
                "Content-Type: application/json",
                "Content-Length: " . strlen($requestBody),
                "MailPace-Server-Token: " . $config["mailpace_server_token"],
            ]),
            "content" => $requestBody,
            "timeout" => 10,
            "ignore_errors" => true,
        ],
    ]);

    $responseBody = @file_get_contents($config["mailpace_api_url"], false, $context);
    $statusLine = isset($http_response_header[0]) ? $http_response_header[0] : "";
    preg_match('/\s(\d{3})\s/', $statusLine, $matches);
    $statusCode = isset($matches[1]) ? (int) $matches[1] : 0;

    if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
        throw new Exception("MailPace request failed: " . ($responseBody ?: "empty response"));
    }
}

function contact_send_with_php_mail($payload, $config)
{
    $subject = "Demande de démonstration SILAO - " . $payload["organization"];
    $textMessage = contact_build_text_message($payload);
    $htmlMessage = contact_build_html_message($payload, $config);
    $boundary = "silao-" . md5(uniqid((string) mt_rand(), true));

    $headers = [
        "MIME-Version: 1.0",
        "From: " . $config["contact_from"],
        "Reply-To: " . $payload["email"],
        "Content-Type: multipart/alternative; boundary=\"" . $boundary . "\"",
    ];

    $body = "--" . $boundary . "\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= $textMessage . "\r\n";
    $body .= "--" . $boundary . "\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
    $body .= $htmlMessage . "\r\n";
    $body .= "--" . $boundary . "--\r\n";

    $sent = mail($config["contact_to"], $subject, $body, implode("\r\n", $headers));
    if (!$sent) {
        throw new Exception("PHP mail() failed");
    }
}

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    contact_respond_json(204, ["success" => true]);
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    contact_respond_json(405, ["success" => false, "error" => "Method not allowed"]);
}

if ((int) ($_SERVER["CONTENT_LENGTH"] ?? 0) > 1000000) {
    contact_respond_json(413, ["success" => false, "error" => "Payload too large"]);
}

$rawBody = file_get_contents("php://input");
$data = json_decode($rawBody ?: "{}", true);

if (!is_array($data)) {
    contact_respond_json(400, ["success" => false, "error" => "Invalid JSON body"]);
}

$payload = [
    "lastName" => trim((string) ($data["lastName"] ?? "")),
    "firstName" => trim((string) ($data["firstName"] ?? "")),
    "email" => trim((string) ($data["email"] ?? "")),
    "organization" => trim((string) ($data["organization"] ?? "")),
    "phone" => trim((string) ($data["phone"] ?? "")),
    "message" => trim((string) ($data["message"] ?? "")),
];

$isValidPayload =
    contact_is_non_empty_string($payload["lastName"]) &&
    contact_is_non_empty_string($payload["firstName"]) &&
    contact_is_email($payload["email"]) &&
    contact_is_non_empty_string($payload["organization"]) &&
    contact_has_max_length($payload["lastName"], 100) &&
    contact_has_max_length($payload["firstName"], 100) &&
    contact_has_max_length($payload["email"], 255) &&
    contact_has_max_length($payload["organization"], 150) &&
    contact_has_max_length($payload["phone"], 30) &&
    contact_has_max_length($payload["message"], 5000);

if (!$isValidPayload) {
    contact_respond_json(422, ["success" => false, "error" => "Invalid request payload"]);
}

try {
    if (!empty($config["dry_run"])) {
        contact_respond_json(200, ["success" => true, "mode" => "dry_run"]);
    }

    if (!empty($config["mailpace_server_token"])) {
        contact_send_with_mailpace($payload, $config);
    } elseif (!empty($config["use_php_mail_fallback"])) {
        contact_send_with_php_mail($payload, $config);
    } else {
        throw new Exception("No mail transport configured");
    }

    contact_respond_json(200, ["success" => true]);
} catch (Throwable $error) {
    if (!empty($config["debug"])) {
        error_log("[contact.php] " . $error->getMessage());
    }

    contact_respond_json(500, ["success" => false, "error" => "Unable to send email"]);
}
