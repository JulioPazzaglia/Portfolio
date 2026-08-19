import WindowFrame from "../ui/WindowFrame";
import Badge from "../ui/Badge";

const SKILL_GROUPS = [
  {
    title: "skills-game-dev.json",
    skills: [
      "Unity",
      "C#",
      "Unreal Engine",
      "Game Design",
      "Level Design",
      "Prototipado",
    ],
  },
  {
    title: "skills-web-dev.json",
    skills: [
      "React",
      "Next.js",
      "TypeScript / JavaScript",
      "Node.js",
      "Express",
      "PHP",
      "SQL / PostgreSQL / MySQL",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 sm:pb-24">
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        Skills
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <WindowFrame key={group.title} title={group.title}>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </WindowFrame>
        ))}
      </div>
    </section>
  );
}
