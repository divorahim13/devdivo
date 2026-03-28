import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Jakarta Timur & Cibubur | Divo Khairul',
  description: 'Jasa pembuatan website profesional oleh Divo Khairul. Melayani klien Jakarta Timur, Cibubur, Nasional, hingga Internasional. Website modern, cepat, dan SEO-friendly.',
  openGraph: {
    title: 'Jasa Pembuatan Website Jakarta Timur & Cibubur | Divo Khairul',
    description: 'Jasa pembuatan website profesional oleh Divo Khairul. Melayani klien Jakarta Timur, Cibubur, Nasional, hingga Internasional. Website modern, cepat, dan SEO-friendly.',
    url: 'https://divokhairul.com',
    siteName: 'Divo Khairul Portfolio',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Divo Khairul - Full Stack Developer",
    "description": "Jasa pembuatan website profesional oleh Divo Khairul. Melayani klien Jakarta Timur, Cibubur, Nasional, hingga Internasional.",
    "areaServed": ["Jakarta Timur", "Cibubur", "Indonesia", "Global"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta Timur",
      "addressRegion": "Jakarta",
      "addressCountry": "ID"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="id" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
