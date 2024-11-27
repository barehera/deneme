'use client';

import { Card, CardHeader } from '@ui/components/ui/card';
import {
  TypographyH4,
  TypographyLarge,
  TypographyP,
  TypographySmall,
} from '@ui/components/ui/typography';
import React from 'react';
import { STATS } from '../constants/stats';
import { Separator } from '@ui/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@ui/components/ui/avatar';
import { DUMMY_USER } from '@/constants/dummy';
import { User } from 'lucide-react';
import { useBearStore } from '@/store/useBearStore';

const WelcomeCard = () => {
  return (
    <Card>
      <CardHeader>
        <Greeting />
        <StatList />
      </CardHeader>
    </Card>
  );
};

export default WelcomeCard;

const StatList = () => {
  return (
    <div className="flex items-center">
      {STATS.map((stat, index) => (
        <div key={stat.label} className="flex items-center">
          <div className="flex flex-col items-center gap-2">
            <TypographyLarge>{stat.value}</TypographyLarge>
            <TypographySmall>{stat.label}</TypographySmall>
          </div>
          {index < STATS.length - 1 && (
            <Separator orientation="vertical" className="mx-6 h-8" />
          )}
        </div>
      ))}
    </div>
  );
};

const Greeting = () => {
  const bears = useBearStore((state) => state.bears);
  const user = DUMMY_USER;

  return (
    <div className="flex items-center gap-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
      <div>
        <TypographyP>Welcome, You have {bears} bears</TypographyP>
        <TypographyH4>Mr. Cuban!</TypographyH4>
      </div>
    </div>
  );
};
