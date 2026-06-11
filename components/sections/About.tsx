import Section from '../layout/Section';
import { motion } from 'motion/react';
import { fadeIn } from '../../lib/animations';

const About = () => {
  return (
    <Section subtitle="À propos">
      <motion.div
        initial={fadeIn.hidden}
        whileInView={fadeIn.visible}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="description text-xl md:text-2xl text-foreground/90 mb-4 md:mb-6">
          J&apos;aborde le développement frontend avec la même{' '}
          <span className="keyword">discipline</span>, la même{' '}
          <span className="keyword">constance</span> et la même recherche
          d&apos;<span className="keyword">amélioration continue</span> que dans
          l&apos;entraînement.
        </p>
        <p className="description">
          Chaque projet repose sur une réflexion structurée et une attention aux
          détails. Je crois en la valeur long terme d&apos;un code propre,
          d&apos;une architecture réfléchie et d&apos;un design centré
          utilisateur. Que vous lanciez votre premier site web ou que vous
          fassiez évoluer une plateforme existante, j&apos;apporte le même
          niveau de concentration et de précision à chaque ligne de code.
        </p>
      </motion.div>
    </Section>
  );
};

export default About;
