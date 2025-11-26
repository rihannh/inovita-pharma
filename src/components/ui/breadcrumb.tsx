'use client';

import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {ChevronRight, MoreHorizontal} from 'lucide-react';

import {cn} from '@/lib/utils';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'>
>(({className, ...props}, ref) => {
  return (
    <nav
      ref={ref}
      aria-label='breadcrumb'
      className={cn('w-full text-sm', className)}
      {...props}
    />
  );
});
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({className, ...props}, ref) => {
  return (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground',
        className
      )}
      {...props}
    />
  );
});
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({className, ...props}, ref) => {
  return (
    <li
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
});
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {asChild?: boolean}
>(({className, asChild, ...props}, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-foreground', className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({className, ...props}, ref) => {
  return (
    <span
      ref={ref}
      aria-current='page'
      className={cn('font-medium text-foreground', className)}
      {...props}
    />
  );
});
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {children?: React.ReactNode}) => {
  return (
    <li
      role='presentation'
      className={cn('flex items-center text-muted-foreground', className)}
      {...props}
    >
      {children ?? <ChevronRight className='h-4 w-4' aria-hidden='true' />}
    </li>
  );
};
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>((props, ref) => {
  return (
    <span ref={ref} role='presentation' {...props}>
      <span className='sr-only'>More</span>
      <MoreHorizontal className='h-4 w-4' aria-hidden='true' />
    </span>
  );
});
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
