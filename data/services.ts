import { Globe, ShoppingCart, Target, RefreshCw } from 'lucide-react';
import { Service } from '../types/service';

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Sites vitrines',
    description:
      'Des sites web modernes, rapides et optimisés pour présenter votre activité, renforcer votre crédibilité et attirer de nouveaux clients.',
  },
  {
    icon: ShoppingCart,
    title: 'Sites e-commerce',
    description:
      "Des boutiques en ligne avec paiements sécurisés via Stripe, conçues pour offrir une expérience d'achat fluide et favoriser les conversions",
  },
  {
    icon: Target,
    title: 'Landing pages',
    description:
      'Des pages de destination pensées pour mettre en valeur une offre, générer des contacts ou maximiser les résultats de vos campagnes marketing.',
  },
  {
    icon: RefreshCw,
    title: 'Refonte de sites web',
    description:
      'Modernisez votre site existant avec une interface plus performante, responsive et adaptée aux attentes actuelles de vos utilisateurs.',
  },
];
