import { cn } from '@/lib/utils';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export function TypographyH1({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className,
      )}
      {...rest}
    />
  );
}

export function TypographyH2({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...rest}
    />
  );
}

export function TypographyH3({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...rest}
    />
  );
}

export function TypographyH4({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className,
      )}
      {...rest}
    />
  );
}

export function TypographyP({
  className,
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return <p className={cn('', className)} {...rest} />;
}

export function TypographyBlockquote({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...rest}
    />
  );
}

export function TypographyInlineCode({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
      {...rest}
    />
  );
}

export function TypographyLead({
  className,
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return (
    <p className={cn('text-xl text-muted-foreground', className)} {...rest} />
  );
}

export function TypographyLarge({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div className={cn('text-lg font-semibold', className)} {...rest} />;
}

export function TypographySmall({
  className,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) {
  return <small className={cn('text-xs font-medium ', className)} {...rest} />;
}

export function TypographyMuted({
  className,
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...rest} />
  );
}
