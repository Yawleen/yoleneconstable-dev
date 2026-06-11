import Container from './Container';

const Section = ({
  id,
  isHero,
  children,
}: {
  id?: string;
  isHero?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <section id={id}>
      <Container isHero={isHero}>{children}</Container>
    </section>
  );
};

export default Section;
