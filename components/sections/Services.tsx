import Section from '../Section';
import { services } from '@/data/services';
import ServiceCard from '../ServiceCard';
import { motion } from 'motion/react';
import { staggerContainer } from '@/lib/animations';

const Services = () => {
  return (
    <Section subtitle="Services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
