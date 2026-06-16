import fs from "node:fs";
const required = [
  "public/index.html",
  "public/index.md",
  "public/articles/index.html",
  "public/articles/index.md",
  "public/skill/index.html",
  "public/skill/index.md",
  "public/about/index.html",
  "public/about/index.md",
  "public/privacy-policy/index.html",
  "public/privacy-policy/index.md",
  "public/terms-of-use/index.html",
  "public/terms-of-use/index.md",
  "skills/emailworkflowskill/SKILL.md",
  "skills/emailworkflowskill/agents/openai.yaml",
  "skills/emailworkflowskill/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/emailworkflowskill/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: emailworkflowskill\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add emailworkflowskill")) throw new Error("Missing install shortcut");
const publicText = required.filter((file) => file.startsWith("public/")).map((file) => fs.readFileSync(file, "utf8")).join("\n");
const forbiddenBrand = new RegExp("Seq" + "uenzy", "i");
if (forbiddenBrand.test(publicText)) throw new Error("Public pages contain a forbidden brand mention");
const markdown = fs.readFileSync("public/index.md", "utf8");
if (!markdown.includes("npx skills add emailworkflowskill")) throw new Error("Missing markdown install shortcut");
console.log("emailworkflowskill.com ok");
