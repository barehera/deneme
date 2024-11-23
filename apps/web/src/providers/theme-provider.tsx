'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentProps } from 'react';

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      themes={[
        'light',
        'dark',
        'forest',
        'ocean',
        'sunset',
        'lavender',
        'desert',
      ]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
