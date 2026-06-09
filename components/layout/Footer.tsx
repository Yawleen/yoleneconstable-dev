import Container from '../Container';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col text-center md:flex-row justify-between gap-4">
          <small>© 2026 Yolène Constable</small>
          <small>React · TypeScript · Tailwind CSS</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
