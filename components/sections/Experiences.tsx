import Section from '../layout/Section';
import { experiences } from '@/data/experiences';

const Experiences = () => {
  return (
    <Section subtitle="Expériences">
      <div className="space-y-12">
        {experiences.map((experience) => (
          <div
            key={`${experience.company}-${experience.period}`}
            className="space-y-4 pb-12 not-last:border-b not-last:border-border"
          >
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
              <div>
                <h3 className="mb-2">{experience.title}</h3>
                <p className="text-lg md:text-xl">{experience.company}</p>
              </div>
              <p>{experience.period}</p>
            </div>
            <p className="description">{experience.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
