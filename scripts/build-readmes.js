import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Handlebars from "handlebars";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const templatePath = path.join(root, "README.template.md");
const languagesPath = path.join(root, "data", "languages.json");
const localesDir = path.join(root, "locales");

const templateSource = fs.readFileSync(templatePath, "utf8");
const template = Handlebars.compile(templateSource, { noEscape: true });

const languages = JSON.parse(fs.readFileSync(languagesPath, "utf8"));
const languageCodes = new Set(languages.map((lang) => lang.code));

const localeFiles = fs
  .readdirSync(localesDir)
  .filter((file) => file.endsWith(".json"));

function outputPathForLocale(code) {
  if (code === "en") {
    return path.join(root, "README.md");
  }
  const entry = languages.find((lang) => lang.code === code);
  const filename = entry?.path || `README-${code}.md`;
  return path.join(root, filename);
}

localeFiles.forEach((file) => {
  const localePath = path.join(localesDir, file);
  const locale = JSON.parse(fs.readFileSync(localePath, "utf8"));

  if (locale.code !== "en" && !languageCodes.has(locale.code)) {
    console.log(`Skipped ${file} (code "${locale.code}") not listed in data/languages.json`);
    return;
  }

  const outputPath = outputPathForLocale(locale.code);
  const rendered = template({ ...locale, languages }).trimEnd() + "\n";

  fs.writeFileSync(outputPath, rendered);
  console.log(`Built ${path.relative(root, outputPath)}`);
});
