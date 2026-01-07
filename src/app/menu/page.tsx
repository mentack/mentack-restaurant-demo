"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImageStore } from '@/lib/placeholder-images';
import { common } from '@/lib/translations';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function MenuPage() {
  const { t, lang } = useTranslation();
  const heroImage = placeholderImageStore['menu-hero'];
  const categories = common.menu_categories;

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
            {t.menu.hero_headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            {t.menu.hero_subheadline}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl">{t.menu.categories}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => {
              const image = placeholderImageStore[category.imageId];
              return (
                <Link key={category.id} href={`/menu/${category.id}`} className="group">
                  <Card className="overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="relative h-64">
                      <Image
                        src={image.imageUrl}
                        alt={category.name[lang]}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                       <div className="absolute inset-0 bg-black/30" />
                    </div>
                    <CardHeader className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent pt-12">
                      <CardTitle className="font-headline text-2xl text-white text-center">
                        {category.name[lang]}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
