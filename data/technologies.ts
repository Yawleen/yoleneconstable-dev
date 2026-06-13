import { TECHNOLOGY_CATEGORIES } from '@/constants/technologies';
import { Technology } from '../types/technology';

export const technologies: Technology[] = [
  {
    category: 'Frontend',
    name: 'Next.js',
  },
  {
    category: 'Frontend',
    name: 'React',
  },
  {
    category: 'Frontend',
    name: 'TypeScript',
  },
  {
    category: 'Frontend',
    name: 'Tailwind CSS',
  },
  {
    category: 'Outils',
    name: 'Stripe',
  },
  {
    category: 'Outils',
    name: 'Vercel',
  },
  {
    category: 'Outils',
    name: 'Sanity',
  },
  {
    category: 'Outils',
    name: 'GA4',
  },
  {
    category: 'Outils',
    name: 'Git / GitHub',
  },
];

export const technologiesByCategory = TECHNOLOGY_CATEGORIES.map((category) => ({
  category,
  technologies: technologies.filter((tech) => tech.category === category),
}));
