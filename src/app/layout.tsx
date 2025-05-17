import './globals.css';
import { Josefin_Sans } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'PimBi',
    template: '%s | PimBi',
  },
  description: 'Post your blog here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
