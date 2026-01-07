"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImageStore } from '@/lib/placeholder-images';
import type { Metadata } from 'next';

export default function AboutPage() {
  const { t } = useTranslation();

  const heroImage = placeholderImageStore['about-hero'];
  const chefImage = placeholderImageStore['about-chef'];
  const valuesImage = placeholderImageStore['about-values'];

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
            {t.about.hero_headline}
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">{t.about.story_headline}</h2>
          <p className="text-muted-foreground text-lg">{t.about.story_text_1}</p>
          <p className="text-muted-foreground">{t.about.story_text_2}</p>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl">{t.about.philosophy_headline}</h2>
          <p className="text-muted-foreground mt-4 text-lg">{t.about.philosophy_text}</p>
        </div>
      </section>

      {/* Chef & Values Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container space-y-24">
          {/* Chef Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={chefImage.imageUrl}
                alt={chefImage.description}
                data-ai-hint={chefImage.imageHint}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 md:order-first">
              <h3 className="font-headline text-3xl md:text-4xl">{t.about.chef_headline}</h3>
              <p className="text-muted-foreground max-w-prose">{t.about.chef_text}</p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="font-headline text-3xl md:text-4xl">{t.about.values_headline}</h3>
              <p className="text-muted-foreground max-w-prose">{t.about.values_text}</p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={valuesImage.imageUrl}
                alt={valuesImage.description}
                data-ai-hint={valuesImage.imageHint}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
