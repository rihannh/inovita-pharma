'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Menu} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navItems = [
  {name: 'Home', href: '#home'},
  {name: 'Produk', href: '#produk'},
  {name: 'Jasa', href: '#jasa'},
  {name: 'Profil', href: '#profil'},
  {name: 'Kontak', href: '#kontak'},
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-12'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-blue-700'>
            <span className='text-lg font-bold text-white'>PF</span>
          </div>
          <span className='font-bold text-xl text-gray-900'>
            Inovita Pharma
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuIndicator />
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              aria-expanded={open}
              aria-controls='mobile-navigation'
            >
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='flex w-[280px] flex-col border-l border-gray-100 bg-white/95 px-0 sm:w-[340px]'
          >
            <SheetHeader className='border-b px-6 py-4 text-left'>
              <SheetTitle className='text-lg font-semibold text-gray-900'>
                Menu Navigasi
              </SheetTitle>
            </SheetHeader>
            <nav
              id='mobile-navigation'
              className='flex flex-1 flex-col gap-2 px-6 py-6'
            >
              {navItems.map((item) => (
                <SheetClose key={item.name} asChild>
                  <Link
                    href={item.href}
                    className='rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600'
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className='border-t px-6 py-4 text-sm text-gray-500'>
              Hubungi kami untuk informasi lebih lanjut mengenai produk dan
              layanan.
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
