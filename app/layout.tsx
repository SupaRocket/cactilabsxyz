import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Components
import { Providers } from './_lib/providers';
import Navbar from './_navigation/navbar';
import Footer from './_navigation/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cacti - Version control for music producers.',
  description:
    'Cacti is a version control system for music producers. It allows you to save, share, and collaborate on music projects with ease.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
