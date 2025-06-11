import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Full Stack Developer | Problem Solver | Tech Explorer
            </h3>

            <p className="text-muted-foreground text-lg">
              I'm <strong>Sajal Chaturvedi</strong>, a passionate full stack developer with hands-on
              experience in modern JavaScript frameworks like <strong>React</strong>, <strong>Next.js</strong>,
              and backend tools like <strong>Django</strong> and <strong>Firebase</strong>.
            </p>

            <p className="text-muted-foreground text-lg">
              I've contributed to projects like <em>SkillBridge</em>, <em>Concert Platform</em>,
              and <em>MediMate</em>, and worked with real clients at <strong>Harsh Hasthkala</strong> and <strong>Orange-Bit</strong>.
            </p>

            <p className="text-muted-foreground text-lg">
              I enjoy building smart, user-centric platforms with clean UIs, fast APIs, and scalable databases.
              Always curious, I constantly explore tools like <strong>Firebase Auth</strong>, <strong>PostgreSQL</strong>, and <strong>GCP</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition"
              >
                Get In Touch
              </a>
              <a
                href="/resume_sajal.pdf" // <- Put this file in the public folder
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
                download
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Highlights Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="p-6 bg-card rounded-2xl shadow-md border border-border hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive websites using React, Next.js, Django, and Firebase.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="p-6 bg-card rounded-2xl shadow-md border border-border hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing clean, accessible, and user-focused interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Experience */}
            <div className="p-6 bg-card rounded-2xl shadow-md border border-border hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Project Experience</h4>
                  <p className="text-muted-foreground">
                    Delivered real-world projects during internships and personal initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
