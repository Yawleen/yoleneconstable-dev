import Section from '../layout/Section';
import { experiences } from '@/data/experiences';
import ExperienceCard from '../ExperienceCard';
import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';

const Experiences = () => {
  return (
    <Section subtitle="Expériences">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Experiences;
