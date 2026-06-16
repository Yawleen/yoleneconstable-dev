import Section from '../layout/Section';
import { technologiesByCategory } from '@/data/technologies';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

const Tech = () => {
  return (
    <Section subtitle="Technologies">
      <div className="space-y-20">
        {technologiesByCategory.map(({ category, technologies }) => (
          <div key={category} className="space-y-8">
            <h3>{category}</h3>
            <div className="grid-layout">
              {technologies.map((tech) => (
                <motion.span
                  variants={fadeIn}
                  key={tech.name}
                  className="text-2xl md:text-3xl text-muted-foreground"
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tech;
