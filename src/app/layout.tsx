import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ClientLayout } from '@/components/client-layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mentack Restaurant | Where Flavor Meets Atmosphere',
    template: '%s | Mentack Restaurant',
  },
  description: 'Experience authentic cuisine in an elegant and welcoming setting at Mentack Restaurant. Book your table today for an unforgettable dining experience.',
  openGraph: {
    title: 'Mentack Restaurant',
    description: 'Experience authentic cuisine in an elegant and welcoming setting.',
    url: 'https://mentack.demo',
    siteName: 'Mentack Restaurant',
    images: [
      {
        url: 'https://picsum.photos/seed/home-hero/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-body antialiased">
        <ClientLayout>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
