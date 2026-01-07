"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, UtensilsCrossed, X } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavLink } from './nav-link';
import { LanguageToggle } from './language-toggle';
import { cn } from '@/lib/utils';
import { common } from '@/lib/translations';

export function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '/about', label: t.nav.about },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center gap-2">
            <UtensilsCrossed className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Mentack</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex">
            <LanguageToggle />
          </div>
          <Button asChild className="hidden md:flex">
            <Link href="/reservations">{t.nav.reserve_button}</Link>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <UtensilsCrossed className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Mentack</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-6 py-8">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      className="text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <LanguageToggle />
                  <Button asChild size="lg" onClick={() => setMobileMenuOpen(false)}>
                    <Link href="/reservations">{t.nav.reserve_button}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
