import Section from '../Section';
import LinkButton from '../LinkButton';
import { SECTION_IDS } from '@/constants/section-ids';
import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeIn, staggerContainer } from '../../lib/animations';

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <Section isHero>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeIn}>
          <h1>Yolène Constable</h1>
          <p className="mb-6 md:mb-8">
            Développeuse Front-End • React & Next.js
          </p>
        </motion.div>
        <motion.h2 variants={fadeIn} className="mb-6 md:mb-8">
          Je transforme vos idées en expériences web modernes, performantes et
          durables.
        </motion.h2>
        <motion.p variants={fadeIn} className="description mb-10 md:mb-12">
          J&apos;accompagne entrepreneurs, associations et PME dans la création
          de sites vitrines, plateformes web et solutions e-commerce.
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
          <LinkButton href={`#${SECTION_IDS.CONTACT}`} text="Me contacter" />
          <LinkButton
            href={`#${SECTION_IDS.PROJECTS}`}
            text="Voir mes projets"
            variant="outline"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        className="hidden relative w-full max-w-md lg:block"
      >
        <div
          aria-hidden="true"
          className="absolute flex inset-0 justify-center items-center"
        >
          <div className="w-80 h-80 rounded-full bg-primary blur-[70px] opacity-18" />
        </div>
        <div className="relative h-120 aspect-3/4 rounded-full overflow-hidden">
          <Image
            src="/images/hero-bg.png"
            alt="Yolène Constable - Développeuse Front-End"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 40vw, 0px"
            priority
          />
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;
