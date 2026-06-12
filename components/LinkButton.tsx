import Link from 'next/link';
import { ReactNode } from 'react';

const LinkButton = ({
  href,
  isExternalLink = false,
  text,
  variant = 'solid',
  icon,
}: {
  href: string;
  isExternalLink?: boolean;
  text: string;
  variant?: 'solid' | 'outline';
  icon?: ReactNode;
}) => {
  return (
    <Link
      href={href}
      {...(isExternalLink && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`btn ${variant === 'solid' ? 'btn--primary' : 'btn--outline'}`}
    >
      <span>{text}</span>
      {icon}
    </Link>
  );
};

export default LinkButton;
