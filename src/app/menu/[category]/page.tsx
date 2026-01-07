"use client";

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImageStore } from '@/lib/placeholder-images';
import { dishes } from '@/lib/data';
import { common } from '@/lib/translations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { category: string };
};

export default function MenuCategoryPage({ params }: Props) {
  const { t, lang } = useTranslation();
  const { category: categoryId } = params;

  const category = common.menu_categories.find(c => c.id === categoryId);
  const filteredDishes = dishes.filter(d => d.category === categoryId);

  if (!category || filteredDishes.length === 0) {
    notFound();
  }
  
  const heroImage = placeholderImageStore[category.imageId];

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
            {category.name[lang]}
          </h1>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => {
              const image = placeholderImageStore[dish.imageId];
              return (
                <Card key={dish.id} className="flex flex-col">
                  <div className="relative h-60 w-full">
                     <Image 
                      src={image.imageUrl}
                      alt={dish.name[lang]}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <CardHeader className="p-0">
                      <div className="flex justify-between items-start">
                        <CardTitle className="font-headline text-2xl">{dish.name[lang]}</CardTitle>
                        <p className="font-semibold text-lg text-primary">{dish.price[lang]}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 mt-2 flex-grow">
                      <CardDescription>{dish.description[lang]}</CardDescription>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-16">
            <Button asChild variant="outline">
              <Link href="/menu">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.menu_category.back_to_menu}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
