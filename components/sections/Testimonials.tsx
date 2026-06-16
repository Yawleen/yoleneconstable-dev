import Section from '../layout/Section';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from '../TestimonialCard';

const Testimonials = () => {
  return (
    <Section subtitle="Témoignages">
      <div className="space-y-16">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            avatar={testimonial.avatar}
            initials={testimonial.initials}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            mention={testimonial.mention}
            quote={testimonial.quote}
            projectUrl={testimonial.projectUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
