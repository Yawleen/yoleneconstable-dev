import { Statistic } from '@/types/statistic';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

const StatCard = ({ value, label }: Statistic) => {
  return (
    <motion.div
      variants={fadeIn}
      className="space-y-3 border-l border-border pl-6"
    >
      <p className="text-3xl md:text-4xl text-primary">{value}</p>
      <p className="text-lg md:text-xl">{label}</p>
    </motion.div>
  );
};

export default StatCard;
