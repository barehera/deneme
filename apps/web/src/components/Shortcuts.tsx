'use client';

import { Card, CardHeader } from '@ui/components/ui/card';
import type { ReactNode } from 'react';
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@ui/components/ui/typography';
import { SHORTCUTS } from '@/constants/shortcuts';
import { useRouter } from 'next/navigation';

const Shortcuts = () => {
  return (
    <div>
      <TypographyH3 className="mb-6">Shortcuts</TypographyH3>
      <div className="grid grid-cols-6 gap-6 ">
        {SHORTCUTS.map((shortcut) => (
          <Shortcut key={shortcut.label} {...shortcut} />
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;

type ShortcutProps = {
  icon: ReactNode;
  label: string;
  href: string;
};

const Shortcut = ({ icon, label, href }: ShortcutProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <Card className="hover:border-primary cursor-pointer" onClick={onClick}>
      <CardHeader className="flex-col items-center justify-center">
        <div className="mb-3">{icon}</div>
        <div className="flex flex-col">
          <TypographyP>{label}</TypographyP>
        </div>
      </CardHeader>
    </Card>
  );
};
