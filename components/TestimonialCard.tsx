import { Testimonial } from '@/types/testimonial';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { fadeIn } from '@/lib/animations';

const TestimonialCard = ({
  avatar,
  name,
  initials,
  role,
  company,
  mention,
  quote,
  projectUrl,
}: Testimonial) => {
  return (
    <motion.div
      variants={fadeIn}
      className="not-last:pb-16 not-last:border-b not-last:border-border/40"
    >
      <div className="flex gap-4 mb-8">
        <div className="relative size-20 rounded-full bg-secondary flex items-center justify-center shrink-0 text-sm text-foreground/70 tracking-wide overflow-hidden md:size-25 md:text-base">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="(min-width: 768px) 100px, 80px"
              className="object-cover object-top"
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div className="space-y-0.5">
          <p className="text-foreground/90 tracking-tight">{name}</p>
          <p className="text-muted-foreground/60 text-sm md:text-base">
            {role} {company && <span> • {company}</span>}
          </p>
          <p className="text-muted-foreground/40 text-xs flex items-center gap-1.5 md:text-sm">
            <span className="inline-block w-3 h-px bg-muted-foreground/30"></span>
            {mention}
          </p>
        </div>
      </div>
      <div className="relative pl-2 mb-6 md:mb-8">
        <span className="absolute -top-4 -left-1 text-5xl text-accent/20 select-none leading-none font-serif">
          &quot;
        </span>
        <p className="text-lg md:text-xl description text-foreground/75 italic relative z-10">
          {quote}
        </p>
      </div>
      <div>
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent/70 hover:text-accent transition-colors duration-200 inline-flex items-center gap-1.5 group md:text-sm"
        >
          Voir le site
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
