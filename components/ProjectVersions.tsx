import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { ProjectVersion } from '@/types/project';
import Link from 'next/link';

const ProjectVersions = ({ versions }: { versions: ProjectVersion[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVersions = () => setIsExpanded((prev) => !prev);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={toggleVersions}
        className="w-full p-3 text-muted-foreground flex items-center justify-between hover:bg-secondary/30 transition-colors cursor-pointer md:px-6 md:py-4"
      >
        <span className="text-xs uppercase tracking-wider md:text-sm">
          Versions ({versions.length})
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="size-3 md:size-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border">
              {versions.map((version) => (
                <div
                  key={version.title}
                  className="p-3 border-b border-border last:border-b-0 hover:bg-secondary/20 transition-colors md:px-6 md:py-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    {version.url ? (
                      <Link
                        href={version.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-foreground">{version.title}</span>
                        <ExternalLink className="shrink-0 size-4" />
                      </Link>
                    ) : (
                      <span className="text-foreground">{version.title}</span>
                    )}
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-xs uppercase tracking-wider whitespace-nowrap md:px-3 ${
                        version.status === 'Terminé'
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}
                    >
                      {version.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectVersions;
