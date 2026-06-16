import Section from '../layout/Section';
import { statistics } from '@/data/stats';
import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';
import StatCard from '../StatCard';

const Stats = () => {
  return (
    <Section subtitle="Quelques chiffres">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid-layout md:gap-12"
      >
        {statistics.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Stats;
