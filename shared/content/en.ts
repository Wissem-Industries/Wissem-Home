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
      'Professional portfolio of Wissem Badraoui, an engineering student at IMT Nord Europe, with projects, experience, resume, and contact information.',
    socialImageAlt: "Preview of Wissem's portfolio",
    personDescription:
      'Engineering student at IMT Nord Europe, interested in software development, data processing, systems security, and useful tools for technical teams.',
  },
  pages: {
    home: {
      eyebrow: 'Portfolio',
      heading: 'Portfolio',
      title: 'Wissem Badraoui, professional portfolio',
      description:
        'Professional portfolio of Wissem Badraoui, an engineering student at IMT Nord Europe, featuring technical projects, experience, resume, and contact details.',
    },
    projects: {
      eyebrow: 'Selected work',
      heading: 'Projects',
      title: 'Projects',
      description:
        'A selection of personal and technical projects developed alongside academic studies, focused on useful tools, web interfaces, and real-world contexts.',
    },
    contact: {
      eyebrow: 'Get in touch',
      heading: 'Contact',
      title: 'Contact',
      description:
        'Contact details, public profiles, and the contact form for reaching Wissem Badraoui.',
    },
  },
  profile: {
    name: 'Wissem.',
    avatarAlt: 'Monochrome logo of Wissem Badraoui.',
    status: 'Engineering student at IMT Nord Europe',
    objective: 'Engineering student open to technical discussions and collaborations.',
    description:
      'Strong interest in software development, data processing, systems security, and useful tools for technical teams.',
    availability: 'Open to conversations',
    seekingInternship: false,
    internship: {
      eyebrow: 'Opportunity sought',
      title: 'Introductory technical internship in data engineering',
      details: [
        { icon: 'i-ri-time-line', label: 'Duration', value: '8 to 12 weeks' },
        { icon: 'i-ri-calendar-line', label: 'Start date', value: 'From June 8, 2026' },
        {
          icon: 'i-ri-map-pin-line',
          label: 'Mobility',
          value: 'Ile-de-France · Lille metropolitan area',
        },
      ],
    },
    focus: {
      eyebrow: 'Technical profile',
      title: 'Software, data and security',
      details: [
        {
          icon: 'i-ri-graduation-cap-line',
          label: 'Education',
          value: 'IMT Nord Europe · Engineering cycle',
        },
        {
          icon: 'i-ri-code-s-slash-line',
          label: 'Approach',
          value: 'Build · Automate · Make reliable',
        },
        {
          icon: 'i-ri-map-pin-line',
          label: 'Mobility',
          value: 'Ile-de-France · Lille metropolitan area',
        },
      ],
    },
    contactCta: 'Get in touch',
    aboutTitle: 'About',
    about: [
      'Preference for practical projects grounded in real needs: improving an existing tool, making a workflow more reliable, or simplifying its use within a team.',
      'Particular interest in software development, data processing, and security, with consistent attention to reliability, clarity, and practical value.',
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        title: 'Technical internship · Modernizing an internal audit support tool',
        organization: 'French Public Finances Directorate (DGFiP)',
        period: '2026 · 11 weeks',
        location: 'Paris',
        thumbnail: '/images/dgfip-logo.png',
        bullets: [
          'Modernization and restructuring of a Python/Tkinter business application supporting payment audits and anomaly analysis for authorized auditors.',
          'Optimization of high-volume data processing with SQLite and DuckDB, notably through the removal of expensive or repeated operations.',
          'Design of multi-criteria search, review, qualification, and result presentation workflows, with human judgment remaining central to the process.',
          'Strengthening of traceability and interrupted-session recovery while preserving existing business rules and data.',
          'Consolidation of the application and its user documentation through iterative feedback with supervisors and business users.',
        ],
      },
      {
        title: 'Technical internship · Company discovery',
        organization: 'Nidec Leroy-Somer',
        period: '2025 · 6 weeks',
        location: 'Angouleme',
        thumbnail: '/images/leroy-somer-logo.png',
        bullets: [
          'Analysis of requirements for an internal tool used by technicians and engineers.',
          'Improvement of data processing and calculation methods to strengthen the tool’s reliability.',
          'Redesign of the Excel interface for greater readability and simpler day-to-day use.',
          'Development of new VBA features and validation of results using real operational data.',
        ],
      },
      {
        title: 'Volunteer technical contribution',
        organization: "Rubik's Network",
        period: '2020 – Present',
        location: 'Remote',
        thumbnail: '/images/rubiks.png',
        bullets: [
          'Preparation of updates and coordination of platform-related work.',
          'Writing of specifications and collaboration with developers, designers, and contributors.',
          'Contribution to platform features and technical systems.',
          'User support, issue handling, and prioritization of reported problems.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        institution: 'IMT Nord Europe',
        title: 'Engineering degree · Engineering cycle',
        period: '2024 – Present',
        location: 'Lille',
        thumbnail: '/images/imt-logo.png',
        details: [
          'First-year engineering-cycle student (undergraduate level +3).',
          'Completion of the integrated preparatory cycle in 2026.',
          'General academic background in mathematics, physics, and computer science.',
          'Collaborative group work and project-based learning.',
          'Foundations in project management.',
        ],
      },
      {
        institution: 'Saint-Paul High School',
        title: 'French general baccalaureate',
        period: '2021 – 2024',
        location: 'Angouleme',
        thumbnail: '/images/saintpaul-logo.png',
        details: [
          'Graduation with highest honors.',
          'Majors in mathematics and physics-chemistry.',
        ],
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
        items: ['PostgreSQL', 'SQLite', 'DuckDB', 'Data processing'],
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
      'A selection of personal and technical projects built alongside academic studies.',
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
    contactDescription: 'For technical discussions, collaborations, or any other enquiry.',
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
        'Development in C with SDL2 of a game inspired by The Legend of Zelda as part of academic studies.',
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
        'https://images.unsplash.com/photo-1759884247381-d7222dd72dec?auto=format&fit=crop&w=1200&q=82',
      tags: ['Excel', 'VBA', 'Data Processing', 'Internal Tooling'],
      date: '2025-06-01',
    },
    {
      id: 'personal-portfolio',
      title: 'Personal portfolio',
      description:
        'Development of a personal website with Nuxt and Nuxt UI to present background, projects, and an online resume.',
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
        'https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=1200&q=82',
      tags: ['Vue', 'TypeScript', 'Express', 'PostgreSQL', 'Dashboard'],
      date: '2025-01-01',
    },
    {
      id: 'password-manager',
      title: 'Password manager',
      description:
        'A command-line password manager built in Python, with encrypted storage and a CLI interface.',
      image:
        'https://images.unsplash.com/photo-1743090661056-e51700546169?auto=format&fit=crop&w=1200&q=82',
      repo: 'https://github.com/WissemBad/Password-Manager',
      tags: ['Python', 'CLI', 'Cryptography', 'Security'],
      date: '2024-01-01',
    },
  ],
  contact: {
    title: 'Contact',
    description: 'Contact for technical discussions, collaborations, or any other enquiry.',
    sidebarTitle: 'Details',
    sidebarDescription: 'Contact details and public profiles.',
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
      successDescription:
        'Thank you for your message. A reply will be provided as soon as possible.',
      errorTitle: 'Unable to send',
      errorDescription: 'An error occurred while sending the message. Please try again later.',
      rateLimited: 'Too many attempts. Please try again in a few minutes.',
      invalidPayload: 'The form data is invalid.',
      unavailable: 'The contact service is unavailable.',
    },
  },
} satisfies PortfolioContent
