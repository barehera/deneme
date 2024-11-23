'use client';

import { Input } from '@ui/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useSidebar } from '@ui/components/ui/sidebar';
import { Button } from '@ui/components/ui/button';
import { Menu } from 'lucide-react';

const AppHeader = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <header className="flex justify-between gap-3 items-center p-6">
      <div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu />
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <Input leftIcon={<Search />} placeholder="Search" />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default AppHeader;
