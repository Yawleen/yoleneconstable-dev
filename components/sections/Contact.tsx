import Section from '../layout/Section';
import Link from 'next/link';
import { Mail, Link2, FolderGit } from 'lucide-react';

const Contact = () => {
  return (
    <Section subtitle="Contact">
      <div className="space-y-12">
        <h3>
          Construisons votre
          <br />
          prochain site web ensemble.
        </h3>
        <Link
          href="mailto:yoleneconstable@gmail.com"
          className="flex items-center gap-3 text-base md:text-lg hover:text-primary transition-colors group"
        >
          <Mail className="social-icon" />
          <span className="border-b border-current">
            yoleneconstable@gmail.com
          </span>
        </Link>
        <div className="flex flex-wrap gap-6">
          <Link
            href="https://fr.linkedin.com/in/constable-yolene"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Link2 className="social-icon" />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/Yawleen?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <FolderGit className="social-icon" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
