import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/email-workflow/SKILL.md",
  "skills/email-workflow/agents/openai.yaml",
  "skills/email-workflow/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/email-workflow/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: email-workflow\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add email-workflow")) throw new Error("Missing install shortcut");
console.log("emailworkflowskill.com ok");
