'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@ui/lib/utils';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    visible?: boolean;
  }
>(
  (
    {
      className,
      orientation = 'horizontal',
      decorative = true,
      visible = true,
      ...props
    },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 ',
        visible && 'bg-border',
        orientation === 'horizontal'
          ? 'h-[1px] w-full my-4 lg:my-6'
          : 'h-full w-[1px] mx-4 lg:mx-6',
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
