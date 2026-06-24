"use client";

import Image from "next/image";
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
  role: string;
  previewLabel: string;
  previewDetail: string;
  highlights: string[];
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
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  "Frontend systems",
  "Backend features",
  "Database work",
  "Desktop apps",
  "Performance",
  "Delivery",
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
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "WPF (MVVM)", icon: "https://skillicons.dev/icons?i=dotnet" },
      { name: "SEO", icon: "https://skillicons.dev/icons?i=google" },
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
      { name: "API Routes", icon: "https://skillicons.dev/icons?i=nextjs" },
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
    title: "Tools",
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
      { name: "Scrum", icon: "https://skillicons.dev/icons?i=google" },
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
    period: "Mar 2026",
    summary:
      "A responsive portal with a unified navigation system, reusable UI components, and layouts tuned for desktop and mobile users.",
    description:
      "Built a component-driven web application with a clear information architecture, reusable interface patterns, and mobile-friendly layouts. The codebase keeps pages, shared components, and global styles organized so product updates stay consistent as the site grows.",
    tech: ["Next.js", "TypeScript", "HTML", "CSS", "JavaScript"],
    accent: "sun",
    codeUrl: "https://github.com/alekhyaatyam/Payhub-Portal",
    role: "Frontend and UI architecture",
    previewLabel: "Responsive portal",
    previewDetail: "Reusable components and navigation for product delivery.",
    highlights: [
      "Centralized shared UI patterns for consistent pages.",
      "Optimized the layout for both desktop and mobile screens.",
      "Kept the structure easy to extend with TypeScript and React.",
    ],
  },
  {
    title: "Task Manager Web App",
    period: "Sep 2025",
    summary:
      "A simple browser-based task manager that lets users add, complete, and remove tasks without losing their list between sessions.",
    description:
      "Created a lightweight task management app focused on speed and clarity. Users can manage tasks locally in the browser, keeping the experience reliable, quick to load, and easy to return to on any device.",
    tech: ["PHP", "Composer", "GitHub"],
    accent: "mint",
    codeUrl: "https://github.com/alekhyaatyam/PHP_web_server",
    role: "Full stack exercise",
    previewLabel: "Local task board",
    previewDetail: "Minimal workflow for daily task tracking.",
    highlights: [
      "Stored task state locally so progress survives refreshes.",
      "Kept the interaction model intentionally simple.",
      "Focused on maintainability and quick browser usage.",
    ],
  },
  {
    title: "Laravel CRUD App",
    period: "Apr 2026",
    summary:
      "A structured Laravel application with a modern asset pipeline and an organized project setup for local development.",
    description:
      "Built a Laravel-based application with separate backend and frontend workflows. The structure supports iterative development, maintainable asset handling, and a setup that can be run locally with minimal friction.",
    tech: ["Laravel", "HTML", "CSS", "Bootstrap", "DB Seeder", "MVC Architecture"],
    accent: "clay",
    codeUrl: "https://github.com/alekhyaatyam/Laravel_CRUD_API",
    role: "Backend and app structure",
    previewLabel: "CRUD foundation",
    previewDetail: "Laravel workflow with clear separation of concerns.",
    highlights: [
      "Separated app logic from frontend asset flow.",
      "Kept the build and run process easy to reproduce locally.",
      "Structured the code to stay maintainable as features expand.",
    ],
  },
  {
    title: "Next.js Frontend with Laravel Core",
    period: "May 2026",
    summary:
      "A full stack app with a Next.js frontend, a Laravel backend, and database tooling for a maintainable content workflow.",
    description:
      "Developed a modern application that pairs a dynamic Next.js interface with a Laravel backend. The system uses migrations and a CMS-friendly structure so content and data can be updated predictably as the product evolves.",
    tech: [
      "Next.js",
      "Laravel",
      "HTML",
      "CSS",
      "JavaScript",
      "CMS",
      "Database Migrations",
      "PostgreSQL",
      "PgAdmin",
      "SEO",
    ],
    accent: "sun",
    codeUrl: "https://github.com/alekhyaatyam/next.js-laravel",
    role: "Full stack architecture",
    previewLabel: "Hybrid stack",
    previewDetail: "Next.js presentation layer over Laravel core services.",
    highlights: [
      "Separated presentation and server logic cleanly.",
      "Used migrations and database tools to support content management.",
      "Kept the system ready for future product scaling.",
    ],
  },
];

const experience: Experience[] = [
  {
    period: "Apr 2026 - Present",
    role: "Web Developer",
    company: "Payraydoo",
    summary:
      "Contributing to the Payraydoo platform by building new user-facing pages, improving backend functionality, and coordinating database updates.",
    details: [
      "Partner with frontend and backend work to support feature delivery and platform updates.",
      "Improve performance, integrations, and database-related workflows while matching product needs.",
      "Translate changing requirements into clear implementation paths across the stack.",
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
    period: "Aug 2022 - Jan 2026",
    role: "Senior Software Developer",
    company: "Teradyne - Zebra with Multi-Project Contributions",
    summary:
      "Worked across embedded systems, automation, semiconductor testing, print workflow solutions, and enterprise tooling.",
    details: [
      "Delivered features and performance improvements across multiple engineering initiatives.",
      "Collaborated with distributed teams on reliable workflows, automation, and tooling.",
      "Balanced product delivery with maintainable implementation patterns across systems.",
    ],
    skills: ["C++", "SQL", "WPF (MVVM)", "JIRA", "Auto Test", "Valgrind", "UML Tools", "Linux", "IPC"],
    mark: "TZ",
    logo: "/HCL_image.png",
    logoAlt: "HCL logo",
  },
  {
    period: "Aug 2021 - Jul 2022",
    role: "Software Developer",
    company: "Xerox - FreeFlow Core",
    summary:
      "Built and optimized workflow automation modules for Xerox FreeFlow Core to improve print production efficiency.",
    details: [
      "Built and maintained automation features for print workflow preparation and submission.",
      "Improved reliability, performance, and reduced manual effort in production workflows.",
      "Worked on scripting and system enhancements across the application flow.",
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
    period: "Jun 2017 - May 2021",
    institution: "Veltech University",
    program: "Bachelor of Technology in Computer Science and Engineering",
    logo: "/veltech_image.jpg",
    logoAlt: "Veltech University logo",
  },
];

const contactLinks = [
  {
    label: "Email me",
    href: "mailto:techie.alekhya@gmail.com?subject=Portfolio%20hello",
    description: "Best for job leads, project questions, and quick introductions.",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alekhya-atyam-b53a86149/",
    description: "Connect for professional updates and hiring conversations.",
  },
  {
    label: "GitHub",
    href: "https://github.com/alekhyaatyam",
    description: "Browse the code and the projects behind the portfolio.",
  },
  {
    label: "Resume",
    href: "/Alekhya_Resume_2026.pdf",
    description: "Open the latest resume in a new tab.",
  },
];

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [roleText, setRoleText] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const sectionNodes = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
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
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const roles = ["Full Stack Developer", "Software Developer", "Product Builder"];
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
          }, 1800);
          return;
        }

        timeoutId = setTimeout(tick, 85);
        return;
      }

      charIndex -= 1;
      setRoleText(currentRole.slice(0, charIndex));

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeoutId = setTimeout(tick, 240);
        return;
      }

      timeoutId = setTimeout(tick, 42);
    };

    timeoutId = setTimeout(tick, 450);

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
          Portfolio
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

        <a className="button button-ghost magic-ghost-button" href="/Alekhya_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </header>

      <section className="hero section" id="about">
        <div className="hero-shell magic-card magic-border-beam">
          <Meteors
            number={20}
            minDelay={0.4}
            maxDelay={2.8}
            minDuration={4}
            maxDuration={9}
            angle={215}
            className="hero-meteors"
          />

          <div className="hero-copy">
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
              I build polished web applications, backend features, and responsive interfaces
              across Next.js, Laravel, C#, C++, and PostgreSQL. I enjoy turning ambiguous
              requirements into clean systems that feel calm to use and easy to maintain.
            </p>

            <div className="hero-chip-row">
              {capabilities.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary hero-resume magic-shimmer-button"
                href="/Alekhya_Resume_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a className="button button-secondary" href="#projects">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/alekhyaatyam"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/alekhya-atyam-b53a86149/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-card magic-orbit-card">
            <div className="hero-pattern" />
            <div className="portrait-orb photo-frame">
              <Image
                className="hero-photo"
                src="/portfolio_image.png"
                alt="Alekhya Atyam profile portrait"
                width={500}
                height={500}
                priority
              />
            </div>

            <div className="hero-card-footer hero-card-footer-home">
              <p>Product-focused full stack work with a clean, premium presentation.</p>
              <a href="mailto:techie.alekhya@gmail.com">techie.alekhya@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-grid" id="skills">
        <div className="skills-panel magic-card magic-border-beam">
          <div className="skills-header">
            <p className="eyebrow">Skills</p>
            <p className="hero-text hero-text-center">
              The stack is broad, but the through-line is the same: build things that are
              reliable, readable, and ready to show in public.
            </p>
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
      </section>

      <section className="section experience-section" id="experience">
        <div className="skills-header">
          <p className="eyebrow">Experience</p>
          <p className="hero-text hero-text-center">
            A timeline of production work across web, desktop, automation, and product delivery.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.period}`}>
              <div className="experience-rail" aria-hidden="true">
                <span className="experience-dot" />
                <span className="experience-line" />
              </div>
              <div className="experience-panel magic-card">
                <div className="experience-head">
                  <div className="experience-mark">
                    {item.logo ? (
                      <img className="experience-logo" src={item.logo} alt={item.logoAlt ?? `${item.company} logo`} />
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

                <ul className="experience-copy experience-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <p className="experience-skills">
                  <strong>Skills:</strong> {item.skills.join(" / ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="skills-header">
          <p className="eyebrow">Projects</p>
          <p className="hero-text hero-text-center">
            Selected work presented as compact case-study cards so it is easy to share, scan,
            and open on social media.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <button
              type="button"
              className={`project-tile magic-card magic-spotlight accent-${project.accent}`}
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`project-visual accent-${project.accent}`}>
                <div className="project-screen">
                  <span className="project-screen-label">{project.role}</span>
                  <strong>{project.previewLabel}</strong>
                  <span>{project.previewDetail}</span>
                </div>
              </div>

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

              <span className="project-tile-action">Open case study</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="skills-header">
          <p className="eyebrow">Education</p>
        </div>

        <div className="education-timeline">
          {education.map((item) => (
            <article className="education-card" key={`${item.institution}-${item.period}`}>
              <div className="education-panel magic-card">
                <div className="education-mark">
                  <img className="education-logo" src={item.logo} alt={item.logoAlt} />
                </div>
                <div className="education-copy">
                  <h3>{item.institution}</h3>
                  <p className="education-program">{item.program}</p>
                  <span className="education-period">{item.period}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-band" id="contact">
        <div className="skills-header">
          <p className="eyebrow contact-eyebrow">Contact</p>
          <p className="contact-intro">Let&apos;s connect.</p>
          <p className="hero-text hero-text-center">
            If you are hiring, collaborating, or just want to talk about shipping polished
            products, these are the fastest ways to reach me.
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              className="contact-link-card magic-card"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
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
            <img className="footer-social-icon" src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
          </a>
          <a
            className="footer-social"
            href="https://github.com/alekhyaatyam"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
          >
            <img className="footer-social-icon" src="https://skillicons.dev/icons?i=github" alt="GitHub" />
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

            <p className="project-modal-role">{selectedProject.role}</p>

            <div className="project-tags project-tags-modal">
              {selectedProject.tech.map((item) => (
                <span className="project-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <p className="project-modal-description">{selectedProject.description}</p>

            <ul className="project-highlights project-highlights-modal">
              {selectedProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

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
