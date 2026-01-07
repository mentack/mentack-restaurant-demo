"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useTranslation } from '@/hooks/use-translation';
import { placeholderImageStore } from '@/lib/placeholder-images';
import { dishes } from '@/lib/data';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const { t, lang } = useTranslation();
  
  const signatureDishes = dishes.filter(d => ['signature-dish-1', 'signature-dish-2', 'signature-dish-3'].includes(d.imageId)).slice(0, 3);

  const heroImage = placeholderImageStore['hero-home'];
  const aboutImage = placeholderImageStore['about-preview'];
  const atmosphereImage = placeholderImageStore['atmosphere-preview'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
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
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl !leading-tight">
            {t.home.hero_headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            {t.home.hero_subheadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/reservations">{t.nav.reserve_button}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/menu">{t.nav.menu}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl">{t.home.about_headline}</h2>
            <p className="text-muted-foreground max-w-prose">
              {t.home.about_text}
            </p>
            <Button asChild variant="link" className="px-0">
              <Link href="/about">
                {t.home.about_link}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
             <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl">{t.home.signature_headline}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {signatureDishes.map(dish => {
              const image = placeholderImageStore[dish.imageId];
              return (
                <Card key={dish.id} className="overflow-hidden">
                  <div className="relative h-60">
                    <Image 
                      src={image.imageUrl}
                      alt={dish.name[lang]}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1120px) 33vw, 350px"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{dish.name[lang]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{dish.description[lang]}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atmosphere Preview */}
      <section className="relative py-24 md:py-32">
        <Image
          src={atmosphereImage.imageUrl}
          alt={atmosphereImage.description}
          data-ai-hint={atmosphereImage.imageHint}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative container text-center text-primary-foreground">
          <h2 className="font-headline text-3xl md:text-4xl">{t.home.atmosphere_headline}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            {t.home.atmosphere_text}
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-background text-center">
        <div className="container">
          <h2 className="font-headline text-2xl md:text-3xl">{t.home.cta_headline}</h2>
          <Button asChild size="lg" className="mt-6">
            <Link href="/reservations">{t.nav.reserve_button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
