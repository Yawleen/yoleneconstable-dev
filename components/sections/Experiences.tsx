import Section from '../layout/Section';
import { experiences } from '@/data/experiences';
import ExperienceCard from '../ExperienceCard';

const Experiences = () => {
  return (
    <Section subtitle="Expériences">
      <div className="space-y-12">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.period}`}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experiences;
