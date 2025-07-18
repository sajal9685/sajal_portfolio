import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
{
  id: 1,
  title: "EchoPass-Ticket Booking App",
  description:
    "Real-time concert ticket booking system with Firebase Auth and cloud database.",
  image: new URL(`/projects/project1.png`, import.meta.url).href,
  tags: ["React.js", "Firebase"],
  demoUrl: "https://bookingapp-f6150.web.app/",
  githubUrl: " https://github.com/sajal9685/fusshn_assignment",
},
{
  id: 2,
  title: "Eduvise",
  description:
    "An education platform built with React, Express.js, and MongoDB to manage and store data of teachers, subjects, classes, and students efficiently.",
  image: new URL(`/projects/project2.png`, import.meta.url).href,
  tags: ["React.js", "Express.js", "MongoDb"],
  demoUrl: "https://eduvise-six.vercel.app/",
  githubUrl: "https://github.com/sajal9685/Eduvise",
},
    {
  id: 3,
  title: "CustomerVoice - Ratings & Review System",
  description:
    "A full-stack web application that allows users to submit ratings and reviews for products, with features like average rating calculation, duplicate prevention, and tag extraction.",
  image: new URL(`/projects/project3.png`, import.meta.url).href,

  tags: ["React.js", "Node.js", "MySQL", "Express.js"],
  demoUrl: "#",
  githubUrl: "https://github.com/sajal9685/CustomerVoice",
},
{
  id: 4,
  title: "BookNote – Notes & Bookmark Manager",
  description:
    "A full-stack web app for managing personal notes and bookmarks, featuring JWT authentication, protected routes, and a responsive UI with a custom theme.",
  image: new URL(`/projects/project4.png`, import.meta.url).href,

  tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  demoUrl: "https://book-note-seven.vercel.app/",
  githubUrl: "https://github.com/sajal9685/BookNote",
},

{
  id: 5,
  title: "Plant Task",
  description:
    "A lightweight task tracker app made with React.js, using localStorage for saving tasks and managing state locally without any backend.",
  image: new URL(`/projects/project5.png`, import.meta.url).href,
  tags: ["React.js"],
  demoUrl: "https://sajal9685.github.io/plant-task/",
  githubUrl: "https://github.com/sajal9685/plant-task",
},
   {
    id: 6,
    title: "SkillBridge – Educational Support Platform",
    description:
      "Career assistant for underserved students with syllabus tracking subject-wise notes, and educational YouTube playlist links.",
    image:new URL(`/projects/project6.jpg`, import.meta.url).href,
    tags: ["React.js", "Django", "MySQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/sajal9685/skillsBridge",
  },
  
  {
    id: 7,
    title: "Fitness Management System",
    description:
      "A personalized platform that tracks fitness progress and gives recommendations based on user activity.",
    image: new URL(`/projects/project7.png`, import.meta.url).href,
    tags: ["React.js", "Django", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/sajal9685/FitnessManagement",
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
            href="https://github.com/sajal9685"
          >
            See More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
