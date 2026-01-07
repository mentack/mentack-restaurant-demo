"use client";

import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';
import { placeholderImageStore } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const mapImage = placeholderImageStore['contact-map'];

  const contactInfo = [
    { icon: MapPin, title: t.contact.address_headline, detail: t.contact.address_details },
    { icon: Phone, title: t.contact.phone_headline, detail: '+1 (234) 567-890', href: 'tel:+1234567890' },
    { icon: Mail, title: t.contact.email_headline, detail: 'contact@mentack.demo', href: 'mailto:contact@mentack.demo' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/50 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-6xl !leading-tight">
            {t.contact.hero_headline}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            {t.contact.hero_subheadline}
          </p>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {contactInfo.map(item => (
              <div key={item.title} className="flex gap-4 items-start">
                <item.icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.detail}</a>
                  ) : (
                    <p className="text-muted-foreground">{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="flex gap-4 items-start">
                <Clock className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl">{t.contact.hours_headline}</h3>
                  <p className="text-muted-foreground">{t.contact.hours_details_1}</p>
                  <p className="text-muted-foreground">{t.contact.hours_details_2}</p>
                </div>
              </div>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" /> {t.contact.call_button}
                </a>
              </Button>
               <Button asChild variant="secondary">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> {t.contact.whatsapp_button}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              data-ai-hint={mapImage.imageHint}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
