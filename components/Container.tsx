import React from 'react';

const Container = ({
  children,
  isHero,
}: {
  children: React.ReactNode;
  isHero?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 w-full max-w-250 mx-auto ${isHero ? 'lg:flex-row lg:items-center' : 'md:flex-row'}`}
    >
      {children}
    </div>
  );
};

export default Container;
