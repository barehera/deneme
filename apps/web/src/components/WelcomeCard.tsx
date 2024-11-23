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
  return (
    <div>
      <TypographyP>Welcome</TypographyP>
      <TypographyH4>Mr. Cuban!</TypographyH4>
    </div>
  );
};
