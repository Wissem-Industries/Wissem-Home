import type { PortfolioContent } from './types'

export const fr = {
  locale: 'fr',
  navigation: {
    label: 'Navigation principale',
    home: 'Accueil',
    projects: 'Projets',
    contact: 'Contact',
  },
  localeSwitchLabel: 'Basculer en anglais',
  theme: { dark: 'Activer le mode sombre', light: 'Activer le mode clair' },
  footer: 'Wissem. • Tous droits réservés.',
  error: {
    title: 'Page introuvable',
    description: 'La page demandée n’existe pas ou n’est plus disponible.',
    home: 'Revenir à l’accueil',
  },
  meta: {
    titleTemplate: '%s | Wissem',
    applicationName: 'Wissem Badraoui',
    defaultTitle: 'Portfolio de Wissem Badraoui',
    defaultDescription:
      'Portfolio professionnel de Wissem Badraoui, élève ingénieur à IMT Nord Europe : projets, expériences, CV et contact.',
    socialImageAlt: 'Aperçu du portfolio de Wissem',
    personDescription:
      'Élève ingénieur à IMT Nord Europe, intéressé par le développement logiciel, le traitement de données, la sécurité des systèmes et les outils utiles aux équipes techniques.',
  },
  pages: {
    home: {
      eyebrow: 'Portfolio',
      heading: 'Portfolio',
      title: 'Wissem Badraoui, portfolio professionnel',
      description:
        'Portfolio professionnel de Wissem Badraoui, élève ingénieur à IMT Nord Europe, avec projets techniques, expériences, CV et contact.',
    },
    projects: {
      eyebrow: 'Projets sélectionnés',
      heading: 'Projets',
      title: 'Projets',
      description:
        'Sélection de projets personnels et techniques réalisés en parallèle du parcours académique, autour d’outils utiles, d’interfaces web et de contextes concrets.',
    },
    contact: {
      eyebrow: 'Prise de contact',
      heading: 'Contact',
      title: 'Contact',
      description:
        'Coordonnées, profils publics et formulaire de contact pour joindre Wissem Badraoui.',
    },
  },
  profile: {
    name: 'Wissem.',
    avatarAlt: 'Logo monochrome de Wissem Badraoui.',
    status: 'Élève ingénieur à IMT Nord Europe',
    objective: 'Élève ingénieur, ouvert aux échanges techniques et aux collaborations.',
    description:
      'Intérêt marqué pour le développement logiciel, le traitement de données, la sécurité des systèmes et les outils utiles aux équipes techniques.',
    availability: 'Ouvert aux échanges',
    seekingInternship: false,
    internship: {
      eyebrow: 'Opportunité recherchée',
      title: 'Stage d’initiation technique en ingénierie des données',
      details: [
        { icon: 'i-ri-time-line', label: 'Durée', value: '8 à 12 semaines' },
        { icon: 'i-ri-calendar-line', label: 'Début', value: 'À partir du 8 juin 2026' },
        {
          icon: 'i-ri-map-pin-line',
          label: 'Mobilité',
          value: 'Île-de-France · Métropole lilloise',
        },
      ],
    },
    focus: {
      eyebrow: 'Profil technique',
      title: 'Logiciel, données et sécurité',
      details: [
        {
          icon: 'i-ri-graduation-cap-line',
          label: 'Formation',
          value: 'IMT Nord Europe · Cycle ingénieur',
        },
        {
          icon: 'i-ri-code-s-slash-line',
          label: 'Approche',
          value: 'Concevoir · Automatiser · Fiabiliser',
        },
        {
          icon: 'i-ri-map-pin-line',
          label: 'Mobilité',
          value: 'Île-de-France · Métropole lilloise',
        },
      ],
    },
    contactCta: 'Prendre contact',
    aboutTitle: 'À propos',
    about: [
      'Goût pour les projets concrets fondés sur un besoin réel : amélioration d’un outil existant, fiabilisation d’un traitement ou simplification de son usage par une équipe.',
      'Intérêt particulier pour le développement logiciel, le traitement de données et les enjeux de sécurité, avec une attention constante portée à la fiabilité, à la clarté et à l’utilité des solutions.',
    ],
    experienceTitle: 'Expériences',
    experience: [
      {
        title: 'Stage technique · Modernisation d’un outil d’assistance à l’audit',
        organization: 'Direction générale des Finances publiques (DGFiP)',
        period: '2026 · 11 semaines',
        location: 'Paris',
        thumbnail: '/images/dgfip-logo.png',
        bullets: [
          'Modernisation et restructuration d’une application métier Python/Tkinter d’assistance à l’audit de paiements et à l’analyse d’anomalies, utilisée par des auditeurs habilités.',
          'Optimisation du traitement de volumes de données importants avec SQLite et DuckDB, notamment par la suppression d’opérations coûteuses ou répétées.',
          'Conception de parcours de recherche multicritère, de contrôle, de qualification et de restitution, avec maintien du jugement humain au centre du processus.',
          'Renforcement de la traçabilité et de la reprise d’un travail interrompu, dans le respect des règles métier et des données existantes.',
          'Consolidation de l’application et de sa documentation au fil d’itérations avec les encadrants et les utilisateurs métier.',
        ],
      },
      {
        title: 'Stage technique · Découverte de l’entreprise',
        organization: 'Nidec Leroy-Somer',
        period: '2025 · 6 semaines',
        location: 'Angoulême',
        thumbnail: '/images/leroy-somer-logo.png',
        bullets: [
          'Analyse des besoins autour d’un outil interne utilisé par des techniciens et des ingénieurs.',
          'Amélioration des traitements de données et des méthodes de calcul afin de renforcer la fiabilité de l’outil.',
          'Refonte de l’interface Excel pour une meilleure lisibilité et un usage quotidien simplifié.',
          'Développement de nouvelles fonctionnalités en VBA et validation des résultats à partir de données réelles.',
        ],
      },
      {
        title: 'Contribution technique bénévole',
        organization: 'Rubik’s Network',
        period: '2020 – Présent',
        location: 'À distance',
        thumbnail: '/images/rubiks.png',
        bullets: [
          'Préparation de mises à jour et coordination de sujets liés à la plateforme.',
          'Rédaction de spécifications et collaboration avec développeurs, designers et contributeurs.',
          'Contribution au développement de fonctionnalités et de systèmes liés à la plateforme.',
          'Support utilisateur, traitement et priorisation des problèmes signalés.',
        ],
      },
    ],
    educationTitle: 'Formation',
    education: [
      {
        institution: 'IMT Nord Europe',
        title: 'Diplôme d’ingénieur · Cycle ingénieur',
        period: '2024 – Présent',
        location: 'Lille',
        thumbnail: '/images/imt-logo.png',
        details: [
          'Élève ingénieur en première année du cycle ingénieur (BAC+3).',
          'Cycle préparatoire intégré validé en 2026.',
          'Formation générale en mathématiques, physique et informatique.',
          'Travaux de groupe et projets collaboratifs.',
          'Premières bases en gestion de projet.',
        ],
      },
      {
        institution: 'Lycée Saint-Paul',
        title: 'Baccalauréat général',
        period: '2021 – 2024',
        location: 'Angoulême',
        thumbnail: '/images/saintpaul-logo.png',
        details: ['Mention Très Bien.', 'Spécialités Mathématiques et Physique-Chimie.'],
      },
    ],
    skillsTitle: 'Compétences',
    skills: [
      {
        title: 'Langages',
        description: 'Langages utilisés pour le développement applicatif.',
        items: ['C', 'Python', 'TypeScript', 'JavaScript', 'VBA', 'SQL'],
      },
      {
        title: 'Web',
        description: 'Développement d’applications web avec l’écosystème JavaScript.',
        items: ['Nuxt', 'Vue.js', 'Node.js', 'Express'],
      },
      {
        title: 'Données',
        description: 'Stockage, requêtes et traitement de données applicatives.',
        items: ['PostgreSQL', 'SQLite', 'DuckDB', 'Traitement de données'],
      },
      {
        title: 'Infrastructure',
        description: 'Serveurs, conteneurisation et déploiement d’applications.',
        items: ['Linux', 'Docker', 'VPS', 'Dokploy', 'CI/CD'],
      },
      {
        title: 'Automatisation',
        description: 'Scripts pour automatiser des traitements et des tâches techniques.',
        items: ['Python', 'Excel VBA', 'Parsing', 'CLI'],
      },
      {
        title: 'Outils',
        description: 'Outils utilisés pour développer, tester et collaborer sur les projets.',
        items: ['Git', 'Postman', 'JetBrains', 'Jira'],
      },
    ],
    projectsTitle: 'Quelques projets',
    projectsDescription:
      'Sélection de projets personnels et techniques réalisés en parallèle du parcours académique.',
    featuredProjectIds: ['satt-tool', 'zeldanes', 'password-manager'],
    allProjects: 'Voir tous les projets',
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'Langue maternelle', value: 100 },
      { name: 'Anglais', level: 'B2', value: 70 },
      { name: 'Espagnol', level: 'A2', value: 35 },
    ],
    interestsTitle: 'Centres d’intérêt',
    interests: ['Cinéma', 'Jeux vidéo', 'Natation', 'Voyages', 'Technologie'],
    contactTitle: 'Contact',
    contactDescription: 'Pour un échange technique, une collaboration ou toute autre demande.',
    locationLabel: 'Localisation',
    location: 'Île-de-France · Métropole lilloise',
  },
  resume: {
    label: 'Télécharger le CV',
    href: '/files/74b87337454200d4d33f80c4663dc5e5.pdf',
    filename: 'CV_Wissem_BADRAOUI.pdf',
    started: 'Le téléchargement du CV a démarré.',
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
      label: 'Site web',
      value: 'www.wissem.pro',
      to: 'https://www.wissem.pro',
      icon: 'i-lucide-globe',
    },
  ],
  projectActions: { view: 'Voir le projet', repo: 'Accéder au code', private: 'Accès privé' },
  projects: [
    {
      id: 'zeldanes',
      title: 'ZeldaNES',
      description:
        'Développement en C avec la bibliothèque SDL2 d’un jeu inspiré de The Legend of Zelda dans le cadre des études.',
      image: '/images/zelda.png',
      repo: 'https://github.com/WissemBad/ZeldaNES',
      tags: ['C', 'SDL2', 'Game', 'Zelda'],
      date: '2026-01-01',
    },
    {
      id: 'satt-tool',
      title: 'Outil interne de traitement de données (SATT)',
      description:
        'Amélioration d’un outil interne du bureau d’études chez Nidec Leroy-Somer : optimisation du traitement de données et ajout de fonctionnalités pour améliorer la fiabilité et l’usage de l’outil.',
      image:
        'https://images.unsplash.com/photo-1759884247381-d7222dd72dec?auto=format&fit=crop&w=1200&q=82',
      tags: ['Excel', 'VBA', 'Data Processing', 'Internal Tooling'],
      date: '2025-06-01',
    },
    {
      id: 'personal-portfolio',
      title: 'Portfolio personnel',
      description:
        'Développement d’un site personnel avec Nuxt et Nuxt UI pour présenter parcours, projets et CV en ligne.',
      image: '/images/portfolio.png',
      url: 'https://www.wissem.pro',
      tags: ['Nuxt', 'Vue', 'Nuxt UI', 'Portfolio'],
      date: '2025-01-01',
    },
    {
      id: 'parcourtime',
      title: 'ParcourTime',
      description:
        'Application web de compte à rebours pour Parcoursup, avec affichage des dates clés et interface simple à utiliser.',
      image: '/images/parcourtime.png',
      url: 'https://parcourtime.wissem.pro',
      repo: 'https://github.com/WissemBad/ParcourTime',
      tags: ['Nuxt', 'Vue', 'Countdown', 'Parcoursup'],
      date: '2025-01-01',
    },
    {
      id: 'internal-dashboard',
      title: 'Panel d’administration interne',
      description:
        'Interface d’administration pour la gestion interne d’une plateforme, avec authentification, rôles, permissions et gestion des utilisateurs.',
      image:
        'https://images.unsplash.com/photo-1754039984985-ef607d80113a?auto=format&fit=crop&w=1200&q=82',
      tags: ['Vue', 'TypeScript', 'Express', 'PostgreSQL', 'Dashboard'],
      date: '2025-01-01',
    },
    {
      id: 'password-manager',
      title: 'Gestionnaire de mots de passe',
      description:
        'Gestionnaire de mots de passe en ligne de commande développé en Python, avec stockage chiffré et interface CLI.',
      image:
        'https://images.unsplash.com/photo-1743090661056-e51700546169?auto=format&fit=crop&w=1200&q=82',
      repo: 'https://github.com/WissemBad/Password-Manager',
      tags: ['Python', 'CLI', 'Cryptographie', 'Sécurité'],
      date: '2024-01-01',
    },
  ],
  contact: {
    title: 'Contact',
    description:
      'Prise de contact pour un échange technique, une collaboration ou toute autre demande.',
    sidebarTitle: 'Coordonnées',
    sidebarDescription: 'Coordonnées et profils publics.',
    fields: {
      name: { label: 'Nom', placeholder: 'Votre nom' },
      email: { label: 'Email', placeholder: 'vous@example.com' },
      subject: { label: 'Sujet', placeholder: 'Sujet du message' },
      message: { label: 'Message', placeholder: 'Votre message' },
    },
    submit: 'Envoyer le message',
    responseHint: 'Réponse dans les plus brefs délais.',
    privacyHint:
      'Les informations transmises servent uniquement à traiter votre demande de contact. Elles ne sont ni stockées, ni publiées ou partagées avec des tiers.',
    privacyAriaLabel: 'Informations sur le traitement des données',
    validation: {
      name: 'Le nom est trop court.',
      email: 'L’adresse email n’est pas valide.',
      subject: 'Le sujet est trop court.',
      message: 'Le message est trop court.',
    },
    messages: {
      successTitle: 'Message envoyé',
      successDescription: 'Merci pour votre message. Une réponse sera apportée dès que possible.',
      errorTitle: 'Envoi impossible',
      errorDescription:
        'Une erreur est survenue lors de l’envoi du message. Merci de réessayer plus tard.',
      rateLimited: 'Trop de tentatives, réessaie dans quelques minutes.',
      invalidPayload: 'Les données du formulaire sont invalides.',
      unavailable: 'Le service de contact est indisponible.',
    },
  },
} satisfies PortfolioContent
