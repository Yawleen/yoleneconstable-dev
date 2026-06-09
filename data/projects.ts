import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    date: '2026',
    category: 'Site événementiel',
    status: "En cours d'évolution",
    title: 'Site vitrine Miss Hauts-de-Seine / Miss Île-de-France 2026',
    images: [
      {
        url: '/images/mockup-home-miss-idf.png',
        alt: "Bannière d'accueil du site vitrine Miss Île-de-France",
      },
      {
        url: '/images/mockup-vote-miss-hds.png',
        alt: 'Section vote du site vitrine Miss Hauts-de-Seine',
      },
      {
        url: '/images/mockup-gallery-miss-idf.png',
        alt: 'Section galerie du site vitrine Miss Île-de-France',
      },
    ],
    description:
      'Site vitrine développé pour accompagner la communication de Janisse Constable lors de ses candidatures à Miss Hauts-de-Seine puis Miss Île-de-France. Le site centralise les informations essentielles, met en valeur son parcours et intègre un parcours de vote optimisé permettant aux visiteurs de voter en quelques clics grâce à un lien SMS prérempli.',
    goal: "Renforcer sa visibilité, centraliser sa communication et faciliter le passage à l'action grâce à un parcours de vote optimisé.",
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GA4'],
    versions: [
      {
        title: 'V1 — Site Miss Hauts-de-Seine 2026',
        url: 'https://janisse-constable-website-1vcctfppy-yawleens-projects.vercel.app/',
        status: 'Terminé',
      },
      {
        title: 'V2 — Site Miss Île-de-France 2026',
        url: 'https://janisseconstable.fr',
        status: 'En cours de développement',
      },
    ],
  },
  {
    date: '2026',
    category: 'Site e-commerce',
    status: 'En cours de développement',
    title:
      "Site e-commerce pour une artiste tatoueuse et créatrice d'objets d'art",
    images: [
      {
        url: '/images/mockup-home-louille.png',
        alt: "Page d'accueil du site e-commerce de Louille, artiste tatoueuse et créatrice d'objets d'art",
      },
      {
        url: '/images/mockup-shop-louille.png',
        alt: "Page shopping du site e-commerce de Louille, artiste tatoueuse et créatrice d'objets d'art",
      },
      {
        url: '/images/mockup-cart-louille.png',
        alt: "Page panier du site e-commerce de Louille, artiste tatoueuse et créatrice d'objets d'art",
      },
    ],
    description:
      "Conception et développement d'un site e-commerce permettant à une artiste de présenter son univers, mettre en valeur ses créations et commercialiser ses produits en ligne. Le site combine portfolio artistique, catalogue produits et parcours d'achat sécurisé.",
    goal: "Développer la visibilité de l'activité, valoriser les créations de l'artiste et proposer une expérience d'achat fluide grâce à une solution de paiement sécurisée.",
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'Sanity',
    ],
  },
  {
    date: '2026',
    category: 'Plateforme communautaire',
    status: 'En cours de développement',
    title:
      "Plateforme communautaire du Conseil Syndical de la Résidence d'Acosta",
    images: [
      {
        url: '/images/mockup-home-cs.png',
        alt: "Page d'accueil de la plateforme communautaire du Conseil Syndical de la Résidence d'Acosta",
      },
      {
        url: '/images/mockup-agenda-cs.png',
        alt: "Page agenda de la plateforme communautaire du Conseil Syndical de la Résidence d'Acosta",
      },
      {
        url: '/images/mockup-docs-cs.png',
        alt: "Page documents de la plateforme communautaire du Conseil Syndical de la Résidence d'Acosta",
      },
      {
        url: '/images/mockup-news-cs.png',
        alt: "Page actualités de la plateforme communautaire du Conseil Syndical de la Résidence d'Acosta",
      },
    ],
    description:
      "Plateforme communautaire destinée aux copropriétaires de la Résidence d'Acosta afin de centraliser les actualités, documents et événements dans un espace unique, clair et facilement accessible.",
    goal: "Offrir un point d'accès unique aux ressources de la copropriété, améliorer la circulation de l'information et renforcer l'engagement des résidents.",
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity'],
  },
];
