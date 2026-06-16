import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "public/about/index.html",
  "public/privacy-policy/index.html",
  "public/terms-of-use/index.html",
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
console.log("emailworkflowskill.com ok");
