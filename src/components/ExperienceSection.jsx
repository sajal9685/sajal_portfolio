import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span> Timeline
        </h2>

        <div className="relative border-l border-primary/30 pl-6 space-y-12">
          {/* Harsh Hasthkala */}
          <div className="group relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
              <Briefcase size={16} />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold">
                  Full Stack Developer –{" "}
                  <span className="text-primary">Harsh Hasthkala</span>
                </h3>
                <span className="text-sm text-muted-foreground">
                  Jan 2025 – Present
                </span>
              </div>
              <p className="text-muted-foreground mb-2">
                As a Full Stack Developer, I built and maintained a feature-rich
                e-commerce website using Next.js. Implemented Firebase for
                backend services including authentication and database. Focused on SEO optimization, performance tuning, and reusable component design—resulting in a 25% boost in site speed and usability.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Next.js
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Firebase
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  SEO
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Full Stack
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Performance Optimization
                </span>
              </div>
            </div>
          </div>

          {/* Orange-Bit */}
          <div className="group relative">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
              <Briefcase size={16} />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xl font-semibold">
                  Web Developer Intern –{" "}
                  <span className="text-primary">Orange-Bit</span>
                </h3>
                <span className="text-sm text-muted-foreground">
                  Sep 2024 – Nov 2024
                </span>
              </div>
              <p className="text-muted-foreground mb-2">
                Developed a QR scan-based attendance tracking system with
                Firebase backend. Created modular, reusable React components for
                maintainable UI and efficient user interactions.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  React.js
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Firebase
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  UI Components
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
