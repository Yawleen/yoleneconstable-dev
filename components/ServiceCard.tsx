import { Service } from '@/types/service';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

const ServiceCard = ({ icon, title, description }: Service) => {
  const Icon = icon;

  return (
    <motion.div
      variants={fadeIn}
      className="space-y-6 p-8 md:p-10 border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
    >
      <Icon className="size-8 text-muted-foreground/60" strokeWidth={1.5} />
      <div className="space-y-4">
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
