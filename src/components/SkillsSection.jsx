import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 99, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 88, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 87, category: "frontend" },

  // Backend
  { name: "Django", level: 85, category: "backend" },
  { name: "Python", level: 95, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  
  //Database
  { name: "SQL", level: 85, category: "database" },
  { name: "MySQL", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  // Tools

  { name: "GitHub", level: 99, category: "tools" },
  { name: "VS Code", level: 99, category: "tools" },
   { name: "Firebase", level: 90, category: "tools" },
];

const categories = [ "frontend", "backend", "tools" ,"database"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium capitalize shadow transition",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted text-foreground hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-border"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
