import type { Metadata } from 'next';
import { Inter, Major_Mono_Display } from 'next/font/google';

import './global.css';
import Footer from './_noPages/views/footer/Footer';

const interFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-interFont',
});

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-majorMonoDisplayFont',
});

export const metadata: Metadata = {
  title: 'Lonely bar',
  description: 'Lonely bar Barceloa - Gracia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${interFont.variable} ${majorMonoDisplay.variable}`}>
        {/* <header>
          <Header />
        </header> */}

        <main>{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

//Usar variables css en global.css en vez de un config y styles. Body tambien
