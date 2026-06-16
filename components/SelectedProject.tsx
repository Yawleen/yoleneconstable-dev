import { Project } from '@/types/project';
import ProjectCarousel from './ProjectCarousel';
import LinkButton from './LinkButton';
import { ArrowUpRight } from 'lucide-react';
import ProjectVersions from './ProjectVersions';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

const SelectedProject = ({
  date,
  category,
  status,
  title,
  images,
  description,
  goal,
  stack,
  versions,
  projectUrl,
}: Project) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative group py-10 space-y-6 border-b border-border md:space-y-4 md:py-12 last:border-b-0"
    >
      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground md:text-sm">
        <span>{date}</span>
        <span>·</span>
        <span>{category}</span>
      </div>
      <h3>{title}</h3>
      <span className="inline-block py-1 px-3 rounded-full text-xs uppercase mb-12 tracking-wider bg-muted text-muted-foreground border border-border md:text-sm md:mb-16">
        {status}
      </span>
      <ProjectCarousel images={images} />
      <p className="description mb-6 md:mb-8">{description}</p>
      <p className="text-sm uppercase tracking-wider text-muted-foreground/60 md:text-base">
        Objectif
      </p>
      <p className="text-foreground/80 mb-8 md:mb-10">{goal}</p>
      <p className="text-sm uppercase tracking-wider text-muted-foreground/60 md:text-base">
        Technologies
      </p>
      <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-muted-foreground/70 md:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      {versions && <ProjectVersions versions={versions} />}
      {projectUrl && (
        <LinkButton
          isExternalLink
          href={projectUrl}
          text="Voir le projet"
          variant="outline"
          icon={
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          }
        />
      )}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></div>
    </motion.div>
  );
};

export default SelectedProject;
