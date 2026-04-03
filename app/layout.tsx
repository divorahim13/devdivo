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
  title: 'Divo Khairul - Software Engineer & Digital Creator',
  description: 'Personal portfolio of Divo Khairul, a Full Stack Developer specializing in modern, high-performance web applications, immersive UI/UX, and complex system architectures.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Divo Khairul - Software Engineer',
    description: 'Personal portfolio of Divo Khairul, specializing in modern, high-performance web applications.',
    url: 'https://divokhairul.com',
    siteName: 'Divo Khairul Portfolio',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Divo Khairul",
    "jobTitle": "Full Stack Developer",
    "description": "Software Engineer & Digital Creator specializing in modern, high-performance web applications.",
    "url": "https://divokhairul.com"
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
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
