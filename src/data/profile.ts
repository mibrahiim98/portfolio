import type { Profile } from "@/types/profile";

/**
 * Single source of truth for all site content.
 * Everything here comes from Mohamed's CV and LinkedIn profile —
 * edit this file to update the site; components only render it.
 */
export const profile: Profile = {
  name: "Mohamed Ibrahem Saied",
  shortName: "Mohamed Ibrahem",
  initials: "MI",
  title: "Frontend Developer",
  location: "Riyadh, Saudi Arabia",
  email: "mo.ibrahiim98@gmail.com",
  photo: "/images/mohamed.jpg",
  cvPath: "/Mohamed_Ibrahem_Saied_CV.pdf",
  intro:
    "Frontend Developer with 6 years of web development experience, building scalable, maintainable web applications with React, TypeScript and Next.js. Currently at Tawuniya, developing customer-facing and internal insurance platforms used in production.",

  stats: [
    { value: "6+", label: "Years in web development" },
    { value: "2023", label: "At Tawuniya since" },
    { value: "Daily", label: "Code & PR reviews" },
  ],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/moibrahem98/" },
    { label: "GitHub", href: "https://github.com/mibrahiim98" },
    { label: "Email", href: "mailto:mo.ibrahiim98@gmail.com" },
  ],

  nav: [
    { id: "experience", label: "Experience" },
    { id: "highlights", label: "Highlights" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],

  experience: [
    {
      company: "Tawuniya",
      title: "Specialist Platform Developer (Frontend)",
      period: "Jan 2023 — Present",
      location: "Riyadh, KSA",
      summary:
        "Developing customer-facing and internal insurance web applications with React, TypeScript and Next.js, with full internationalization support.",
      responsibilities: [
        "Design and build reusable, maintainable UI components shared across multiple forms, flows and applications.",
        "Translate Figma designs into responsive, pixel-accurate interfaces that work consistently across devices and browsers.",
        "Integrate RESTful APIs and implement multi-step user flows, including OTP verification, form handling and file uploads.",
        "Own production support: diagnose and resolve production and environment-specific issues, and optimize rendering and load performance.",
        "Write unit and component tests with Jest and React Testing Library.",
        "Review pull requests daily for the frontend team, maintaining coding standards and code quality.",
        "Collaborate with backend, product, design and QA teams through structured change-request processes.",
      ],
      achievements: [
        "Built an in-house web accessibility solution from scratch, replacing the need for a third-party plugin.",
        "Delivered a dynamic, API-driven product comparison experience with optimized mobile behavior.",
        "Developed an in-app feedback and bug-reporting tool with screenshot capture and annotation.",
      ],
      stack: ["React", "Next.js", "TypeScript", "Material UI", "Tailwind CSS", "Jest"],
    },
    {
      company: "Nawader Group",
      title: "Frontend Developer",
      period: "Dec 2021 — Dec 2022",
      responsibilities: [
        "Owned and maintained the company website and internal admin dashboard end to end using React.",
        "Shipped new features and improvements on a daily cadence, integrating RESTful APIs with the backend team.",
        "Built responsive, cross-browser interfaces and handled bug fixes and ongoing maintenance of both platforms.",
      ],
      stack: ["React", "JavaScript", "REST APIs", "Responsive Design"],
    },
  ],

  highlights: [
    {
      title: "In-house Accessibility Solution",
      description:
        "Built from scratch: contrast modes, text scaling, readable fonts and focus indicators, using React Context, CSS custom properties and analytics tracking — replacing the need for a third-party accessibility plugin.",
      tags: ["React Context", "CSS Custom Properties", "Accessibility", "Analytics"],
    },
    {
      title: "Product Comparison Experience",
      description:
        "A dynamic, API-driven comparison with optimized mobile behavior, made more reliable by replacing brittle hardcoded string matching with normalization-based logic.",
      tags: ["React", "REST APIs", "Material UI", "Responsive"],
    },
    {
      title: "Feedback & Bug Reporting Tool",
      description:
        "An in-app reporting tool with screenshot capture and annotation, giving users and QA a faster way to report issues with visual context.",
      tags: ["React", "html2canvas", "UX"],
    },
  ],

  marquee: {
    primary: [
      "Accessibility Solution",
      "Product Comparison",
      "Bug Reporting Tool",
      "Insurance Platforms",
      "Admin Dashboard",
    ],
    secondary: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux Toolkit", "Jest"],
  },

  skills: [
    { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Redux Toolkit", "React Context API", "React Router", "Formik"],
    },
    {
      category: "Styling & UI",
      items: ["Material UI", "Tailwind CSS", "Sass", "CSS Modules", "Bootstrap", "Responsive Design"],
    },
    { category: "Testing", items: ["Jest", "React Testing Library"] },
    { category: "Build & Tools", items: ["Vite", "Figma", "Google Tag Manager"] },
    { category: "APIs & Integration", items: ["RESTful APIs", "Firebase"] },
    { category: "Collaboration", items: ["Git", "GitLab", "Code Review", "Pull Request Workflows"] },
    {
      category: "Practices",
      items: [
        "Component Architecture",
        "Performance Optimization",
        "Web Accessibility",
        "Internationalization (i18n)",
        "Cross-Browser Compatibility",
      ],
    },
  ],

  leadership: [
    {
      label: "Mentoring",
      text: "Mentor and onboard frontend developers on the codebase, coding standards and team workflows.",
    },
    {
      label: "Knowledge sharing",
      text: "Prepare and deliver internal technical sessions for the frontend team, including a presentation on the React component lifecycle.",
    },
  ],

  education: [
    {
      title: "BSc Computer Science",
      institution: "Kafr El-Sheikh University — Faculty of Computers and Information",
      period: "2015 — 2019",
      details: ["Grade: Very Good (80%)", "Graduation project: Car Rental Web Application — graded Excellent"],
    },
    {
      title: "Full Stack Web Development (Python)",
      institution: "Information Technology Institute (ITI)",
      period: "2020 — Jul 2021",
      details: ["Intensive full-stack training covering frontend and backend web development through hands-on projects."],
      projects: [
        {
          name: "E-commerce Store",
          stack: ["React", "Django", "Bootstrap"],
          description: "Team-built full-stack makeup and perfume store supporting product browsing, buying and selling.",
          url: "https://mid4night.store/",
        },
        {
          name: "Hajj Greeting Card Generator",
          stack: ["React", "html2canvas", "CSS3"],
          description: "Bilingual web app for personalizing Hajj greeting cards and downloading them as images.",
        },
      ],
    },
  ],

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],
};
