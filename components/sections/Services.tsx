import Section from '../layout/Section';
import { services } from '@/data/services';
import ServiceCard from '../ServiceCard';

const Services = () => {
  return (
    <Section subtitle="Services">
      <div className="grid-layout">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
