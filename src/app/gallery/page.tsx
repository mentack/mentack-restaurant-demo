"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { galleryImageIds } from '@/lib/data';
import { placeholderImageStore } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function GalleryPage() {
  const { t } = useTranslation();
  const heroImage = placeholderImageStore['menu-hero'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl md:text-6xl !leading-tight">
            {t.gallery.hero_headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            {t.gallery.hero_subheadline}
          </p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImageIds.map((id, index) => {
              const image = placeholderImageStore[id];
              if (!image) return null;
              return (
                <div key={index} className="break-inside-avoid">
                   <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={500}
                    height={700}
                    className="w-full h-auto rounded-lg object-cover shadow-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
