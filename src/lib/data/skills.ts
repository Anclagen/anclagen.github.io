export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "SvelteKit",
      "Tailwind",
      "Bootstrap",
      "HTML, CSS, JS fundamentals",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Sequelize",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "MSSQL",
      "C# (learning)",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Azure (containers, SQL, Data Factory", "GitHub Actions"],
  },
  {
    title: "Testing & QA",
    skills: ["Jest", "Supertest", "Cypress", "Postman", "Swagger", "Code Review"],
  },
  {
    title: "Workflow & Tools",
    skills: [
      "Git",
      "GitHub",
      "Agile/Scrum (Jira, Trello)",
      "Figma",
      "Adobe XD",
      "Power BI (data import, measures, dashboards)",
    ],
  },
];

export interface Skill {
  name: string;
  imgSrc: string;
}
export const skills: Skill[] = [
  { name: "HTML5", imgSrc: "https://skillicons.dev/icons?i=html" },
  { name: "CSS3", imgSrc: "https://skillicons.dev/icons?i=css" },
  { name: "SASS", imgSrc: "https://skillicons.dev/icons?i=sass" },
  { name: "BootStrap", imgSrc: "https://skillicons.dev/icons?i=bootstrap" },
  { name: "Tailwind", imgSrc: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Flowbite", imgSrc: "/assets/images/flowbite-logo.svg" },
  { name: "Skeleton", imgSrc: "/assets/images/skeleton_ui.png" },
  { name: "JavaScript", imgSrc: "https://skillicons.dev/icons?i=javascript" },
  { name: "TypeScript", imgSrc: "https://skillicons.dev/icons?i=typescript" },
  { name: "React", imgSrc: "https://skillicons.dev/icons?i=react" },
  { name: "Next", imgSrc: "https://skillicons.dev/icons?i=next" },
  { name: "Svelte", imgSrc: "https://skillicons.dev/icons?i=svelte" },
  { name: "Node", imgSrc: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Express", imgSrc: "https://skillicons.dev/icons?i=express" },
  { name: "Prisma", imgSrc: "https://skillicons.dev/icons?i=prisma" },
  { name: "Git", imgSrc: "https://skillicons.dev/icons?i=git" },
  { name: "GitHub", imgSrc: "https://skillicons.dev/icons?i=github" },
  { name: "WordPress", imgSrc: "https://skillicons.dev/icons?i=wordpress" },
  { name: "VSC", imgSrc: "https://skillicons.dev/icons?i=vscode" },
  { name: "Figma", imgSrc: "https://skillicons.dev/icons?i=figma" },
  { name: "Adobe XD", imgSrc: "https://skillicons.dev/icons?i=xd" },
  { name: "Photoshop", imgSrc: "https://skillicons.dev/icons?i=ps" },
];
