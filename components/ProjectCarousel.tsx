import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { ProjectImage } from '@/types/project';
import Image from 'next/image';

const ProjectCarousel = ({ images }: { images: ProjectImage[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  const count = images.length;

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel
        className="w-full max-w-xl mx-auto"
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="ml-0 gap-4">
          {images.map((image) => (
            <CarouselItem key={image.url} className="pl-0">
              <span className="block mb-4 text-center text-xs text-muted-foreground md:mb-6">
                {image.alt}
              </span>
              <div className="relative w-full h-62.5 md:h-85 aspect-16/10">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Image précédente" />
        <CarouselNext aria-label="Image suivante" />
      </Carousel>
      <span
        aria-live="polite"
        className="block mb-4 text-center text-xs text-muted-foreground md:mb-6"
      >
        Photo {current} sur {count}
      </span>
    </>
  );
};

export default ProjectCarousel;
