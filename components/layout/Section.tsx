import Container from './Container';

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
          <h2 className="w-full max-w-xs shrink-0 text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground md:sticky md:top-8 md:self-start">
            {subtitle}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
