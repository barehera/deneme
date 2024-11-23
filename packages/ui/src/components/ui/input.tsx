import * as React from 'react';
import type { ReactNode } from 'react';

import { cn } from '@ui/lib/utils';

interface ExtraInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & ExtraInputProps
>(({ className, type, leftIcon, rightIcon, ...props }, ref) => {
  return (
    <div className="relative flex items-center gap-2">
      {leftIcon && <div className="absolute left-2">{leftIcon}</div>}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
          leftIcon && 'pl-10',
          rightIcon && 'pr-10',
        )}
        ref={ref}
        {...props}
      />
      {rightIcon && <div className="absolute right-2">{rightIcon}</div>}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
