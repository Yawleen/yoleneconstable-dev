import { staggerContainer } from '@/lib/animations';
import Container from './Container';
import { motion } from 'motion/react';

const Section = ({
  id,
  isHero,
  subtitle,
  children,
}: {
  id?: string;
  isHero?: boolean;
  subtitle?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={isHero ? 'border-b border-border' : ''}>
      <Container isHero={isHero}>
        {!isHero && subtitle && (
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-xs shrink-0 text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground md:sticky md:top-8 md:self-start"
          >
            {subtitle}
          </motion.h2>
        )}
        {isHero ? (
          children
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
          >
            {children}
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default Section;
