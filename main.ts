import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const entry = "Your file took a wrong turn on the way here and arrived as 0 bytes \u2014 nothing to open, nothing to save. Save it as a PDF under 10 MB and try again.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.resolve(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, entry + "\n", "utf8");
  console.log("wrote " + outFile + " (" + entry.length + " chars) from " + scriptDir);
} catch (err) {
  console.error("failed to write entry: " + err.message);
  process.exit(1);
}
