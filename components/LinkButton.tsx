import Link from 'next/link';

const LinkButton = ({
  href,
  text,
  variant = 'solid',
}: {
  href: string;
  text: string;
  variant?: 'solid' | 'outline';
}) => {
  return (
    <Link
      href={href}
      className={`btn ${variant === 'solid' ? 'btn--primary' : 'btn--outline'}`}
    >
      <span>{text}</span>
    </Link>
  );
};

export default LinkButton;
