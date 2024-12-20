import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type React from 'react';

import '@fepatex/ui/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { SidebarProvider } from '@ui/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import AppHeader from '@/components/AppHeader';
import TanstackQueryProvider from '@/providers/TanstackQueryProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Simple Next.js with ShadCN UI Starter',
  description: 'Generated by @gmickel',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TanstackQueryProvider>
          <ThemeProvider>
            <SidebarProvider>
              <AppSidebar />
              <div className="w-full flex flex-col">
                <AppHeader />
                <main className="flex-grow container mx-auto">{children}</main>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
