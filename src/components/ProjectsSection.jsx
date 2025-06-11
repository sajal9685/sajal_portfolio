import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fitness Management System",
    description:
      "A personalized platform that tracks fitness progress and gives recommendations based on user activity.",
    image: "/projects/project1.png",
    tags: ["React.js", "Django", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SkillBridge – Educational Support Platform",
    description:
      "Career assistant for underserved students with syllabus tracking subject-wise notes, and educational YouTube playlist links.",
    image: "/projects/project1.png",
    tags: ["React.js", "Django", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Concert Ticket Booking App",
    description:
      "Real-time concert ticket booking system with Firebase Auth and cloud database.",
    image: "/projects/project1.png",
    tags: ["React.js", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="text-primary">Projects</span> I've Built
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the real-world applications and platforms I've built,
          integrating modern tech stacks and solving meaningful problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition duration-300"
            >
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sajalchaturvedi" // update with your GitHub username
          >
            See More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
