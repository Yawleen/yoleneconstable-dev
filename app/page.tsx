'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Stats from '@/components/sections/Stats';
import Experiences from '@/components/sections/Experiences';
import Tech from '@/components/sections/Tech';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Experiences />
      <Tech />
    </main>
  );
}
