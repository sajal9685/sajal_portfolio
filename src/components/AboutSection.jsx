import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
        >
          About <span className="text-primary bg-gradient-to-r from-primary to-[#90D1CA] bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left - Intro Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              Full Stack Developer | Problem Solver | Tech Explorer
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <strong>Sajal Chaturvedi</strong>, a passionate developer with real-world experience in JavaScript frameworks like <strong>React</strong>, <strong>Next.js</strong>, and backend tools like <strong>Django</strong> and <strong>Firebase</strong>.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I've worked on impactful projects like <em>SkillBridge</em>, <em>Concert Platform</em>, and <em>Fitness Mangement</em>, delivering solutions with <strong>Harsh Hasthkala</strong> and <strong>Orange-Bit</strong>.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I build intuitive platforms with clean UI, performant APIs, and robust databases. My tools of choice include <strong>Firebase Auth</strong>, <strong>PostgreSQL</strong>, and <strong>GCP</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="cosmic-button"
              >
                Get In Touch
              </a>
              <a
                href="/resume_sajal.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 font-medium transition-all duration-300"
                download
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                desc: "Responsive apps using React, Next.js, Django, and Firebase.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                desc: "Creating intuitive, accessible, and aesthetic interfaces.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Experience",
                desc: "Delivered client work and personal projects across domains.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{card.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{card.title}</h4>
                    <p className="text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
