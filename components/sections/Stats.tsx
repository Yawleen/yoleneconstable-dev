import Section from '../layout/Section';
import { statistics } from '@/data/stats';
import StatCard from '../StatCard';

const Stats = () => {
  return (
    <Section subtitle="Quelques chiffres">
      <div className="grid-layout md:gap-12">
        {statistics.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Section>
  );
};

export default Stats;
