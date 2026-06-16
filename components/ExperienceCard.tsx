import { Experience } from '@/types/experience';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: Experience) => {
  return (
    <motion.div
      variants={fadeIn}
      className="space-y-4 pb-12 not-last:border-b not-last:border-border"
    >
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <div>
          <h3 className="mb-2">{title}</h3>
          <p className="text-lg md:text-xl">{company}</p>
        </div>
        <p>{period}</p>
      </div>
      <p className="description">{description}</p>
    </motion.div>
  );
};

export default ExperienceCard;
