import type {Metadata} from 'next';
import {Geist_Mono, Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PharmaFirst - Inovasi Farmasi untuk Kesehatan Masyarakat',
  description:
    'Perusahaan farmasi terpercaya dengan komitmen terhadap kualitas, inovasi, dan kesehatan masyarakat Indonesia. Produk farmasi berkualitas tinggi dengan standar internasional.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
