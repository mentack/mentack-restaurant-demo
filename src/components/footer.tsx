"use client";

import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { NavLink } from "./nav-link";

export function Footer() {
  const { t } = useTranslation();

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '/about', label: t.nav.about },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/reservations', label: t.nav.reservations },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Mentack Restaurant</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">{t.footer.about}</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline font-semibold">{t.footer.quick_links}</h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.href}>
                  <NavLink href={item.href} className="text-muted-foreground">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline font-semibold">{t.footer.contact_us}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t.contact.address_details}</p>
              <p>contact@mentack.demo</p>
              <p>+1 (234) 567-890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mentack Restaurant. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
