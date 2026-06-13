import Section from '../layout/Section';
import { statistics } from '@/data/stats';

const Stats = () => {
  return (
    <Section subtitle="Quelques chiffres">
      <div className="grid-layout md:gap-12">
        {statistics.map((stat) => (
          <div
            key={stat.label}
            className="space-y-3 border-l border-border pl-6"
          >
            <p className="text-4xl md:text-5xl text-primary">{stat.value}</p>
            <p className="text-lg md:text-xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Stats;
