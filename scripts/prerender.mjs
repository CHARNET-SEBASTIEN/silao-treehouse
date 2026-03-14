import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

const entryServerModule = await import(
  pathToFileURL(path.join(distDir, "server", "entry-server.js")).href
);

const { render, PUBLIC_ROUTES, ROBOTS_TXT, SITEMAP_XML, getPageSeo, buildHeadMarkup } =
  entryServerModule;

const appTemplate = await fs.readFile(path.join(distDir, "index.html"), "utf8");

const headPattern = /<!--app-head:start-->[\s\S]*<!--app-head:end-->/;
const rootPattern = /<div id="root"><\/div>/;

const buildDocument = (page) => {
  const html = render(page.path);
  return appTemplate
    .replace(
      headPattern,
      `<!--app-head:start-->\n    ${buildHeadMarkup(page)}\n    <!--app-head:end-->`,
    )
    .replace(rootPattern, `<div id="root">${html}</div>`);
};

for (const page of PUBLIC_ROUTES.filter((route) => route.path !== "/404")) {
  const outputPath =
    page.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, page.path.slice(1), "index.html");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, buildDocument(page));
}

const notFoundPage = getPageSeo("/404");
await fs.writeFile(path.join(distDir, "404.html"), buildDocument(notFoundPage));
await fs.writeFile(path.join(distDir, "robots.txt"), ROBOTS_TXT);
await fs.writeFile(path.join(distDir, "sitemap.xml"), SITEMAP_XML);
