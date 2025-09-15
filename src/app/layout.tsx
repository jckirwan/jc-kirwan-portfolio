'use client';
import './globals.css';
import ContentState from './contexts/content/ContentState';

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-zinc-800">
        <ContentState>{children}</ContentState>
      </body>
    </html>
  );
}
