import Section from '../layout/Section';
import { technologiesByCategory } from '@/data/technologies';

const Tech = () => {
  return (
    <Section subtitle="Technologies">
      <div className="space-y-20">
        {technologiesByCategory.map(({ category, technologies }) => (
          <div key={category} className="space-y-8">
            <h3>{category}</h3>
            <div className="grid-layout">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="text-2xl md:text-3xl text-muted-foreground"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tech;
