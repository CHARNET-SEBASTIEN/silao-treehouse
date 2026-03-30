import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const ovhDistDir = path.join(projectRoot, "dist-ovh");

await fs.rm(ovhDistDir, { recursive: true, force: true });
await fs.mkdir(ovhDistDir, { recursive: true });

await fs.cp(distDir, ovhDistDir, {
  recursive: true,
  filter: (source) => path.basename(source) !== "server",
});

const exampleConfigPath = path.join(ovhDistDir, "api", "contact-config.php.example");
const configPath = path.join(ovhDistDir, "api", "contact-config.php");

await fs.copyFile(exampleConfigPath, configPath);

console.log(`[build:ovh] Package ready in ${ovhDistDir}`);
