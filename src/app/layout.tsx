'use client';
import './globals.css';
import ContentState from './contexts/content/ContentState';
import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google';

import { ReactNode } from 'react';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz'],
});
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-page font-sans text-secondary antialiased print:bg-white">
        <div className="atmosphere print:hidden" aria-hidden="true" />
        <ContentState>{children}</ContentState>
      </body>
    </html>
  );
}
