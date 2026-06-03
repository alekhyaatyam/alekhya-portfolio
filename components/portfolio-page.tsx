"use client";

import { useEffect, useState } from "react";

import { Meteors } from "./meteors";

type Project = {
  title: string;
  period: string;
  summary: string;
  description: string;
  tech: string[];
  accent: string;
  codeUrl: string;
};

type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  details: string[];
  skills: string[];
  mark: string;
  logo?: string;
  logoAlt?: string;
};

type Education = {
  period: string;
  institution: string;
  program: string;
  logo: string;
  logoAlt: string;
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const metrics = [
  { value: "7+", label: "Years shaping digital products" },
  { value: "24", label: "Launches across SaaS, retail, and AI" },
  { value: "92%", label: "Average client retention rate" },
];

const capabilities = [
  "Product Strategy",
  "UI Systems",
  "Interaction Design",
  "Frontend Development",
  "Creative Direction",
  "Rapid Prototyping",
];

type SkillItem = {
  name: string;
  icon: string;
  alt?: string;
};

const skillGroups: { title: string; items: SkillItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "WPF (MVVM)", icon: "https://skillicons.dev/icons?i=dotnet" },
      { name: "SEO", icon: "https://skillicons.dev/icons?i=google" },
      { name: "CMS", icon: "https://skillicons.dev/icons?i=google" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
      { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
      { name: "Dot Net Framework", icon: "https://skillicons.dev/icons?i=dotnet" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
      { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Next.js API Routes", icon: "https://skillicons.dev/icons?i=nextjs" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "pgAdmin", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "DB Seeder", icon: "https://skillicons.dev/icons?i=mysql" },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
      { name: "pnpm", icon: "https://skillicons.dev/icons?i=pnpm" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "Visual Studio", icon: "https://skillicons.dev/icons?i=visualstudio" },
      { name: "Scrum", icon: "https://skillicons.dev/icons?i=google"},
      { name: "AWS Lightsail", icon: "https://skillicons.dev/icons?i=aws" },
      { name: "Composer", icon: "https://skillicons.dev/icons?i=composer" },
      { name: "Apache", icon: "https://skillicons.dev/icons?i=apache" },
      { name: "WordPress", icon: "https://skillicons.dev/icons?i=wordpress" },
    ],
  },
];


const projects: Project[] = [
  {
    title: "Payhub Portal",
    period: "MAR 2026",
    summary:
      "A fully responsive web application featuring a unified navigation system, reusable UI components, and optimized layouts for both desktop and mobile devices.",
    description:
      "Developed a responsive, component‑driven web application featuring a unified navigation system, reusable UI elements, and mobile‑optimized layouts, with a structured TypeScript/React architecture that centralizes pages, shared components, and global styling for consistent user experience across the site.",
    tech: ["Next.js", "TypeScript", "HTML", "CSS", "JavaScript"],
    accent: "sun",
    codeUrl: "https://github.com/alekhyaatyam/Payhub-Portal",
  },
  {
    title: "Task Manager Web App",
    period: "Sep 2025",
    summary:
      "A simple and intuitive web-based task manager that lets users keep track of their daily tasks directly in the browser.",
    description:
      "Created a lightweight task management application where users can add new tasks, mark them as completed, and remove them when no longer needed. The app stores all tasks locally, ensuring they remain available between sessions while keeping everything easy to use and accessible through a clean, minimal interface.",
    tech: ["PHP", "Composer", "GitHub"],
    accent: "mint",
    codeUrl: "https://github.com/alekhyaatyam/PHP_web_server",
  },
  {
    title: "Laravel CRUD App",
    period: "Apr 2026",
    summary:
      "A structured Laravel web application built with a modern asset pipeline and organized project setup, providing a smooth foundation for developing and running the application locally.",
    description:
      "Created a Laravel-based application with a clear project structure and streamlined build process for both development and production environments. The project uses separate workflows for backend logic and frontend assets, ensuring maintainability and scalability. It can run seamlessly through a local environment tool or be launched manually, offering flexibility for different development setups. The overall build process supports efficient iteration while keeping the application organized and easy to manage.",
    tech: ["Laravel", "HTML", "CSS", "Bootstrap", "DB Seeder", "MVC Architecture"],
    accent: "clay",
    codeUrl: "https://github.com/alekhyaatyam/Laravel_CRUD_API",
  },
  {
    title: "Next.js Frontend with Laravel Core",
    period: "May 2026",
    summary:
      "A full‑stack web application built with a Next.js frontend and a Laravel backend, supported by a structured database and content management workflow to deliver a smooth, scalable development experience.",
    description:
      "Developed a modern application that combines a dynamic Next.js interface with a robust Laravel backend, creating a clean separation between presentation and server logic. The project includes an organized database layer with migrations and a CMS‑driven structure, ensuring data is easy to manage, update, and extend. Designed with clarity and maintainability in mind, the system provides a predictable workflow for building features, managing content, and scaling the application as it grows.",
    tech: ["Next.js", "Laravel", "HTML", "CSS", "JavaScript", "CMS", "Database Migrations", "PostgreSQL", "PgAdmin", "SEO"],
    accent: "sun",
    codeUrl: "https://github.com/alekhyaatyam/next.js-laravel",
  },
];

const experience: Experience[] = [
  {
    period: "April 2026 - Present",
    role: "Web Developer",
    company: "Payraydoo",
    summary:
      "Contributed to the development of the Payraydoo platform by creating new user-facing pages, improving backend functionality, and managing database updates. Worked across the full stack to deliver smooth integrations, enhance system performance, and ensure the platform aligned with updated design and business requirements.",
    details: [
      "Partnered across frontend and backend work to support feature delivery and platform updates.",
      "Improved performance, integrations, and database-related workflows while aligning implementation with product needs.",
    ],
    skills: [
      "Next.js",
      "Laravel",
      "Postman",
      "PostgreSQL",
      "AWS Lightsail",
      "GitHub",
      "Docker",
      "PHP",
      "Tailwind CSS",
      "SEO",
      "CMS",
    ],
    mark: "P",
  },
  {
    period: "August 2022 - January 2026",
    role: "Senior Software Developer",
    company: "Teradyne - Zebra with Multi-Project Contributions",
    summary:
      "Senior Software Developer with experience across embedded systems, automation, semiconductor testing, print workflow solutions, and enterprise tooling. Delivered end-to-end features, optimized performance, automated deployments, and collaborated across global engineering teams.",
    details: [
      "Worked across multiple engineering initiatives spanning enterprise tools, automation, and system optimization.",
      "Collaborated with distributed teams to deliver reliable features and improve developer and operational workflows.",
    ],
    skills: [
      "C++",
      "SQL",
      "WPF (MVVM)",
      "JIRA",
      "Auto Test",
      "Valgrind",
      "UML Tools",
      "Linux",
      "IPC",
    ],
    mark: "TZ",
    logo: "/HCL_image.png",
    logoAlt: "HCL logo",
  },
  {
    period: "August 2021 - July 2022",
    role: "Software Developer",
    company: "Xerox - FreeFlow Core",
    summary:
      "Software Developer responsible for building and optimizing workflow automation modules within Xerox FreeFlow Core, improving print production efficiency through scripting, automation, and system enhancements.",
    details: [
      "Built and maintained automation features for print workflow preparation and submission.",
      "Focused on reliability, performance, and reducing manual effort in production workflows.",
    ],
    skills: [
      "C#",
      "Dot Net Framework",
      "HTML",
      "CSS",
      "JavaScript",
      "Image Processing",
      "Cross-functional Collaboration",
    ],
    mark: "FFC",
    logo: "/HCL_image.png",
    logoAlt: "HCL logo",
  },
];

const education: Education[] = [
  {
    period: "June 2017 - May 2021",
    institution: "Veltech University",
    program: "Bachelor of Technology in Computer Science and Engineering",
    logo: "/veltech_image.jpg",
    logoAlt: "Veltech University logo",
  },
];

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [roleText, setRoleText] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const revealNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    revealNodes.forEach((node, index) => {
      node.style.setProperty("--delay", `${index * 80}ms`);
      revealObserver.observe(node);
    });

    const sectionNodes = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.3, 0.55, 0.8] }
    );

    sectionNodes.forEach((node) => sectionObserver.observe(node));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const roles = ["Full Stack Developer", "Software Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        charIndex += 1;
        setRoleText(currentRole.slice(0, charIndex));

        if (charIndex === currentRole.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 2000);
          return;
        }

        timeoutId = setTimeout(tick, 90);
        return;
      }

      charIndex -= 1;
      setRoleText(currentRole.slice(0, charIndex));

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeoutId = setTimeout(tick, 250);
        return;
      }

      timeoutId = setTimeout(tick, 45);
    };

    timeoutId = setTimeout(tick, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <main className="page-shell">
      <div className="page-aura page-aura-left" />
      <div className="page-aura page-aura-right" />

      <header className="topbar magic-floating">
        <a className="brand-mark" href="#about">
          <span className="brand-dot" />
          Alekhya Atyam
        </a>

        <nav className="nav-pill" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                className={isActive ? "nav-link active" : "nav-link"}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a className="button button-ghost magic-ghost-button" href="#contact">
          Let&apos;s talk
        </a>
      </header>

      <section className="hero section" id="about">
        <div className="hero-shell magic-card magic-border-beam" data-reveal="">
          <Meteors
            number={26}
            minDelay={0.4}
            maxDelay={2.8}
            minDuration={4}
            maxDuration={9}
            angle={215}
            className="hero-meteors"
          />
          <div className="hero-copy">
            {/* <p className="eyebrow">Welcome</p> */}
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h2 className="hero-greeting">Alekhya Atyam</h2>
            <h2 className="hero-role">
              I am a{" "}
              <span className="hero-role-animated magic-gradient-text">
                {roleText}
                <span className="hero-caret" aria-hidden="true" />
              </span>
            </h2>
            <p className="hero-text">
              As a driven professional, I am fueled by a deep-seated passion for
              continuous learning and the art of problem-solving. I embrace each
              new challenge with unwavering optimism and a mindset focused on
              growth, consistently aiming to deliver outcomes of the utmost
              quality. With a proactive approach, I actively pursue
              opportunities where I can apply my skills and knowledge, aspiring
              to make a meaningful impact in the ever-evolving landscape of
              technology while maintaining a steadfast dedication to excellence.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary hero-resume magic-shimmer-button"
                href="/Alekhya_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
              {/* <a className="button button-secondary" href="#about">
                About me
              </a> */}
            </div>
          </div>

          <div className="hero-card magic-orbit-card">
            <div className="hero-pattern" />
            <div className="portrait-orb photo-frame">
              <img
                className="hero-photo"
                src="/profile-placeholder.svg"
                alt="Alekhya Atyam profile portrait"
              />
            </div>
            {/* <div className="hero-card-footer hero-card-footer-home">
              <p>
                Full stack development with curiosity, consistency, and craft.
              </p>
              <a href="mailto:techie.alekhya@gmail.com">
                techie.alekhya@gmail.com
              </a>
            </div> */}
          </div>
        </div>
      </section>

      <section className="section section-grid" id="skills">
        {/* <div className="section-heading" data-reveal="">
          <p className="eyebrow">About</p>
          <h2>A calm, premium layout with space to breathe.</h2>
        </div> */}

        {/* <div className="about-panel" data-reveal="">
          <p>
            I help founders and teams turn ambitious ideas into polished digital
            products. My process balances brand sensitivity, strong interface
            systems, and the kind of detail that makes a site feel memorable.
          </p>
          <p>
            This build follows a similar rhythm to the reference: spacious hero,
            anchored navigation, modular sections, confident typography, and
            motion that supports the story instead of overpowering it.
          </p>
        </div>

        <div className="metrics-row" data-reveal="">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div> */}

        <div className="skills-panel magic-card magic-border-beam" data-reveal="">
          <div className="skills-header">
            <h3 className="eyebrow">Skills</h3>
          </div>

          <div className="skills-grid">
              {skillGroups.map((group) => (
                <article
                  className={`skill-group magic-card skill-group-${group.title
                    .toLowerCase()
                    .replace(/[^a-z]+/g, "-")}`}
                  key={group.title}
                >
                  <h4>{group.title}</h4>
                  <div className="skill-pill-grid">
                    {group.items.map((item) => (
                      <div className="skill-icon-card magic-micro-card" key={item.name}>
                        <div className="skill-icon-wrap">
                          <img
                            className="skill-icon"
                            src={item.icon}
                            alt={item.alt ?? `${item.name} icon`}
                            loading="lazy"
                          />
                        </div>
                        <span className="skill-label">{item.name}</span>
                      </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* <div className="capability-panel" data-reveal="">
          <p className="eyebrow">Capabilities</p>
          <div className="chip-row">
            {capabilities.map((capability) => (
              <span className="chip" key={capability}>
                {capability}
              </span>
            ))}
          </div>
        </div> */}
      </section>

      <section className="section experience-section" id="experience">
        <div className="skills-header">
          <h3 className="eyebrow">Experience</h3>
          {/* <h2>Experience</h2> */}
        </div>

        <div className="experience-timeline" data-reveal="">
          {experience.map((item) => (
            <article
              className="experience-card"
              key={`${item.company}-${item.period}`}
            >
              <div className="experience-rail" aria-hidden="true">
                <span className="experience-dot" />
                <span className="experience-line" />
              </div>
              <div className="experience-panel magic-card">
                <div className="experience-head">
                  <div className="experience-mark">
                    {item.logo ? (
                      <img
                        className="experience-logo"
                        src={item.logo}
                        alt={item.logoAlt ?? `${item.company} logo`}
                      />
                    ) : (
                      item.mark
                    )}
                  </div>
                  <div className="experience-meta">
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                    <span className="experience-period">{item.period}</span>
                  </div>
                </div>
                <p className="experience-summary">{item.summary}</p>
                {/* <div className="experience-copy">
                  {item.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div> */}
                <p className="experience-skills">
                  <strong>Skills:</strong> {item.skills.join(" • ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="skills-header">
          <h3 className="eyebrow">Projects</h3>
        </div>

        <div className="projects-grid" data-reveal="">
          {projects.map((project) => (
            <button
              type="button"
              className={`project-tile magic-card magic-spotlight accent-${project.accent}`}
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-tags">
                {project.tech.map((item) => (
                  <span className="project-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-tile-copy">
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p>{project.summary}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="skills-header">
          <h3 className="eyebrow">Education</h3>
        </div>

        <div className="education-timeline" data-reveal="">
          {education.map((item) => (
            <article
              className="education-card"
              key={`${item.institution}-${item.period}`}
            >
              <div className="education-panel magic-card">
                <div className="education-mark">
                  <img
                    className="education-logo"
                    src={item.logo}
                    alt={item.logoAlt}
                  />
                </div>
                <div className="education-copy">
                  <h3>{item.institution}</h3>
                  <p className="education-program">{item.program}</p>
                  <span className="education-period">{item.period}</span>
                </div>
              </div>
              {/* <div className="education-rail" aria-hidden="true">
                <span className="education-dot" />
                <span className="education-line" />
              </div> */}
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-band" id="contact" data-reveal="">
        <div className="skills-header">
          <h3 className="eyebrow">CONTACT</h3>
          <p className="contact-intro">Let&apos;s connect!</p>
        </div>

        <form
          className="contact-form-shell magic-card magic-border-beam"
          action="mailto:techie.alekhya@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="contact-form-title-row">
            <h3>Email Me</h3>
            {/* <span className="contact-form-kicker">Send a message</span> */}
          </div>

          <div className="contact-form-grid">
            <label className="contact-field">
              <span className="sr-only">Your Email</span>
              <input type="email" name="email" placeholder="Your Email" required />
            </label>

            <label className="contact-field">
              <span className="sr-only">Your Name</span>
              <input type="text" name="name" placeholder="Your Name" required />
            </label>

            <label className="contact-field">
              <span className="sr-only">Subject</span>
              <input type="text" name="subject" placeholder="Subject" required />
            </label>

            <label className="contact-field contact-field-message">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                rows={7}
                required
              />
            </label>
          </div>

          <button className="contact-submit magic-shimmer-button" type="submit">
            Send
          </button>
        </form>
      </section>

      <footer className="footer-bar">
        <a className="footer-brand" href="#about">
          Alekhya Atyam
        </a>
        <nav className="footer-nav" aria-label="Footer">
          {navigation.map((item) => (
            <a key={item.href} className="footer-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          <a
            className="footer-social"
            href="https://www.linkedin.com/in/alekhya-atyam-b53a86149/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <img
              className="footer-social-icon"
              src="https://skillicons.dev/icons?i=linkedin"
              alt="LinkedIn"
            />
          </a>
          <a
            className="footer-social"
            href="https://github.com/alekhyaatyam"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
          >
            <img
              className="footer-social-icon"
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
            />
          </a>
        </div>
      </footer>

      {selectedProject ? (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="project-modal magic-card magic-border-beam"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h2 id="project-modal-title">{selectedProject.title}</h2>
            <p className="project-modal-period">{selectedProject.period}</p>

            <div className="project-tags project-tags-modal">
              {selectedProject.tech.map((item) => (
                <span className="project-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <p className="project-modal-description">
              {selectedProject.description}
            </p>

            <div className="project-modal-actions">
              <a
                className="project-modal-button magic-shimmer-button"
                href={selectedProject.codeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
