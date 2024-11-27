'use client';

import { Button } from '@ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@ui/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useState, type ReactNode } from 'react';

type LanguageCode = 'en' | 'fr' | 'es';

const LanguageSwitcher = () => {
  const [selectedLanguageCode, setSelectedLanguageCode] =
    useState<LanguageCode>('en');

  const languages: Record<
    LanguageCode,
    { code: LanguageCode; label: string; icon: ReactNode }
  > = {
    en: {
      code: 'en',
      label: 'English',
      icon: <Globe />,
    },
    fr: {
      code: 'fr',
      label: 'French',
      icon: <Globe />,
    },
    es: {
      code: 'es',
      label: 'Spanish',
      icon: <Globe />,
    },
  };

  const selectedLanguage = languages[selectedLanguageCode];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedLanguage.icon}
          <span className="uppercase">{selectedLanguage.code}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.values(languages).map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguageCode(language.code)}
          >
            {language.icon}
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
