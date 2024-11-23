'use client';

import { Input } from '@ui/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const AppHeader = () => {
  return (
    <header className="flex justify-end gap-3 items-end p-6">
      <Input leftIcon={<Search />} placeholder="Search" />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </header>
  );
};

export default AppHeader;
