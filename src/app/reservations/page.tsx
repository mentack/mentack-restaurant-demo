"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImageStore } from '@/lib/placeholder-images';
import { ReservationForm } from '@/components/reservation-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mail, Phone } from 'lucide-react';

export default function ReservationsPage() {
  const { t } = useTranslation();
  const heroImage = placeholderImageStore['reservations-hero'];

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
            {t.reservations.hero_headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            {t.reservations.hero_subheadline}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl md:text-4xl mb-8">{t.reservations.form_headline}</h2>
            <ReservationForm />
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Phone className="h-5 w-5"/>
                  <span>{t.contact.phone_headline}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Mail className="h-5 w-5"/>
                  <span>{t.contact.email_headline}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:contact@mentack.demo" className="text-muted-foreground hover:text-primary">contact@mentack.demo</a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Clock className="h-5 w-5"/>
                  <span>{t.reservations.opening_hours}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.reservations.opening_details}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
