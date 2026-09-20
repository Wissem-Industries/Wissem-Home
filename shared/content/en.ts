import type { PortfolioContent } from './types'

export const en = {
  locale: 'en',
  navigation: {
    label: 'Primary navigation',
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
  },
  localeSwitchLabel: 'Switch to French',
  theme: { dark: 'Switch to dark mode', light: 'Switch to light mode' },
  footer: 'Wissem. • All rights reserved.',
  error: {
    title: 'Page not found',
    description: 'The requested page does not exist or is no longer available.',
    home: 'Back to home',
  },
  meta: {
    titleTemplate: '%s | Wissem',
    applicationName: 'Wissem Badraoui',
    defaultTitle: 'Wissem Badraoui | Portfolio',
    defaultDescription:
      'Professional portfolio of Wissem Badraoui, an IMT Nord Europe student with projects, experience, resume, and contact information.',
    socialImageAlt: "Preview of Wissem's portfolio",
    personDescription:
      'IMT Nord Europe student interested in software development, data processing, systems security, and useful tools for technical teams.',
  },
  pages: {
    home: {
      eyebrow: 'Portfolio',
      heading: 'Portfolio',
      title: 'Wissem Badraoui, professional portfolio',
      description:
        'Professional portfolio of Wissem Badraoui, an IMT Nord Europe student featuring technical projects, experience, resume, and contact details.',
    },
    projects: {
      eyebrow: 'Selected work',
      heading: 'Projects',
      title: 'Projects',
      description:
        'A selection of personal and technical projects developed alongside my studies, with a focus on useful tools, web interfaces, and real-world environments.',
    },
    contact: {
      eyebrow: "Let's talk",
      heading: 'Contact',
      title: 'Contact',
      description:
        'Contact details, public profiles, and the contact form for reaching Wissem Badraoui.',
    },
  },
  profile: {
    name: 'Wissem.',
    avatarAlt: 'Monochrome logo of Wissem Badraoui.',
    status: 'Student at IMT Nord Europe, in the second year of the integrated preparatory cycle',
    objective: 'Looking for a technical internship lasting 8 to 12 weeks starting June 8, 2026',
    description:
      'I am interested in software development, data processing, systems security, and building useful tools for technical teams.',
    availability: 'Available for a technical internship',
    contactCta: 'Get in touch',
    aboutTitle: 'About',
    about: [
      'I enjoy practical projects where the goal is to start from a real need and improve an existing tool, make a workflow more reliable, or simplify the way a solution is used by a team.',
      'I am particularly interested in software development, data processing, and security topics, with strong attention to reliability, clarity, and usefulness.',
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        title: 'Technical internship · Company discovery',
        organization: 'Nidec Leroy-Somer',
        period: '2025 · 6 weeks',
        location: 'Angouleme',
        thumbnail: '/images/leroy-somer-logo.png',
        bullets: [
          'Analyzed needs around an internal tool used by technicians and engineers.',
          'Improved data processing and calculation methods to make the tool more reliable.',
          'Reworked the Excel interface to improve readability and day-to-day usability.',
          'Developed new VBA features and validated the results using real operational data.',
        ],
      },
      {
        title: 'Volunteer technical contribution',
        organization: "Rubik's Network",
        period: '2020 – Present',
        location: 'Remote',
        thumbnail: '/images/rubiks.png',
        bullets: [
          'Prepared updates and coordinated the progress of platform-related work.',
          'Wrote specifications and collaborated with developers, designers, and contributors.',
          'Contributed to platform features and technical systems.',
          'Provided user support and helped process and prioritize reported issues.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        institution: 'IMT Nord Europe',
        title: 'Integrated preparatory cycle · Engineering degree',
        period: '2024 – Present',
        location: 'Lille',
        thumbnail: '/images/imt-logo.png',
        details: [
          'Second-year student (undergraduate level +2).',
          'General academic background in mathematics, physics, and computer science.',
          'Collaborative group work and project-based learning.',
          'First foundations in project management.',
        ],
      },
      {
        institution: 'Saint-Paul High School',
        title: 'French general baccalaureate',
        period: '2021 – 2024',
        location: 'Angouleme',
        thumbnail: '/images/saintpaul-logo.png',
        details: ['Graduated with highest honors.', 'Majors in mathematics and physics-chemistry.'],
      },
    ],
    skillsTitle: 'Skills',
    skills: [
      {
        title: 'Languages',
        description: 'Programming languages used for application development.',
        items: ['C', 'Python', 'TypeScript', 'JavaScript', 'VBA', 'SQL'],
      },
      {
        title: 'Web',
        description: 'Web application development with the JavaScript ecosystem.',
        items: ['Nuxt', 'Vue.js', 'Node.js', 'Express'],
      },
      {
        title: 'Data',
        description: 'Application data storage, querying, and processing.',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'],
      },
      {
        title: 'Infrastructure',
        description: 'Servers, containerization, and application deployment.',
        items: ['Linux', 'Docker', 'VPS', 'Dokploy', 'CI/CD'],
      },
      {
        title: 'Automation',
        description: 'Scripts used to automate processing and technical tasks.',
        items: ['Python', 'Excel VBA', 'Parsing', 'CLI'],
      },
      {
        title: 'Tools',
        description: 'Tools used to build, test, and collaborate on projects.',
        items: ['Git', 'Postman', 'JetBrains', 'Jira'],
      },
    ],
    projectsTitle: 'Selected projects',
    projectsDescription:
      'A selection of personal and technical projects built alongside my studies.',
    featuredProjectIds: ['satt-tool', 'zeldanes', 'password-manager'],
    allProjects: 'View all projects',
    languagesTitle: 'Languages',
    languages: [
      { name: 'French', level: 'Native language', value: 100 },
      { name: 'English', level: 'B2', value: 70 },
      { name: 'Spanish', level: 'A2', value: 35 },
    ],
    interestsTitle: 'Interests',
    interests: ['Cinema', 'Video games', 'Swimming', 'Travel', 'Technology'],
    contactTitle: 'Contact',
    contactDescription:
      'For internship opportunities, technical discussions, or additional information.',
    locationLabel: 'Location',
    location: 'Ile-de-France · Lille metropolitan area',
  },
  resume: {
    label: 'Download resume',
    href: '/files/74b87337454200d4d33f80c4663dc5e5.pdf',
    filename: 'CV_Wissem_BADRAOUI.pdf',
    started: 'The resume download has started.',
  },
  links: [
    {
      id: 'email',
      label: 'Email',
      value: 'contact@wissem.pro',
      to: 'mailto:contact@wissem.pro',
      icon: 'i-lucide-mail',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: '@WissemBadraoui',
      to: 'https://linkedin.com/in/WissemBadraoui',
      icon: 'i-lucide-linkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: '@WissemBad',
      to: 'https://github.com/WissemBad',
      icon: 'i-lucide-github',
    },
    {
      id: 'website',
      label: 'Website',
      value: 'www.wissem.pro',
      to: 'https://www.wissem.pro',
      icon: 'i-lucide-globe',
    },
  ],
  projectActions: { view: 'View project', repo: 'View code', private: 'Private access' },
  projects: [
    {
      id: 'zeldanes',
      title: 'ZeldaNES',
      description:
        'A Zelda-inspired project developed in C with SDL2 to build a game inspired by The Legend of Zelda during my studies.',
      image: '/images/zelda.png',
      repo: 'https://github.com/WissemBad/ZeldaNES',
      tags: ['C', 'SDL2', 'Game', 'Zelda'],
      date: '2026-01-01',
    },
    {
      id: 'satt-tool',
      title: 'Internal data processing tool (SATT)',
      description:
        'Improvements made to an internal engineering office tool at Nidec Leroy-Somer, including data processing optimizations and new features to improve reliability and daily usability.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=960&q=70',
      tags: ['Excel', 'VBA', 'Data Processing', 'Internal Tooling'],
      date: '2025-06-01',
    },
    {
      id: 'personal-portfolio',
      title: 'Personal portfolio',
      description:
        'A personal website built with Nuxt and Nuxt UI to present my background, projects, and online resume.',
      image: '/images/portfolio.png',
      url: 'https://www.wissem.pro',
      tags: ['Nuxt', 'Vue', 'Nuxt UI', 'Portfolio'],
      date: '2025-01-01',
    },
    {
      id: 'parcourtime',
      title: 'ParcourTime',
      description:
        'A countdown web app for Parcoursup, displaying key dates through a simple and accessible interface.',
      image: '/images/parcourtime.png',
      url: 'https://parcourtime.wissem.pro',
      repo: 'https://github.com/WissemBad/ParcourTime',
      tags: ['Nuxt', 'Vue', 'Countdown', 'Parcoursup'],
      date: '2025-01-01',
    },
    {
      id: 'internal-dashboard',
      title: 'Internal admin dashboard',
      description:
        'An administration interface for internal platform operations, with authentication, roles, permissions, and user management.',
      image:
        'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=960&q=70',
      tags: ['Vue', 'TypeScript', 'Express', 'PostgreSQL', 'Dashboard'],
      date: '2025-01-01',
    },
    {
      id: 'password-manager',
      title: 'Password manager',
      description:
        'A command-line password manager built in Python, with encrypted storage and a CLI interface.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=960&q=70',
      repo: 'https://github.com/WissemBad/Password-Manager',
      tags: ['Python', 'CLI', 'Cryptography', 'Security'],
      date: '2024-01-01',
    },
  ],
  contact: {
    title: 'Contact',
    description:
      'You can contact me for internship opportunities, technical discussions, or additional information.',
    sidebarTitle: 'Details',
    sidebarDescription: 'Ways to reach me and view my public profiles.',
    fields: {
      name: { label: 'Name', placeholder: 'Your name' },
      email: { label: 'Email', placeholder: 'you@example.com' },
      subject: { label: 'Subject', placeholder: 'Message subject' },
      message: { label: 'Message', placeholder: 'Your message' },
    },
    submit: 'Send message',
    responseHint: 'Reply as soon as possible.',
    privacyHint:
      'The information provided is used only to process your contact request. It is neither stored, published, nor shared with third parties.',
    privacyAriaLabel: 'Information about data processing',
    validation: {
      name: 'The name is too short.',
      email: 'The email address is invalid.',
      subject: 'The subject is too short.',
      message: 'The message is too short.',
    },
    messages: {
      successTitle: 'Message sent',
      successDescription: 'Thank you for your message. I will get back to you as soon as possible.',
      errorTitle: 'Unable to send',
      errorDescription: 'An error occurred while sending the message. Please try again later.',
      rateLimited: 'Too many attempts. Please try again in a few minutes.',
      invalidPayload: 'The form data is invalid.',
      unavailable: 'The contact service is unavailable.',
    },
  },
} satisfies PortfolioContent
