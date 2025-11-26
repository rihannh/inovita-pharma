'use client';

import {useState} from 'react';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {cn} from '@/lib/utils';

const DESCRIPTION_PREVIEW_LENGTH = 140;

export type Product = {
  id: number;
  nama: string;
  deskripsi: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  className?: string;
};

export function ProductCard({product, className}: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const description = product.deskripsi;
  const isExpandable = description.length > DESCRIPTION_PREVIEW_LENGTH;
  const displayText =
    !isExpandable || isExpanded
      ? description
      : `${description.slice(0, DESCRIPTION_PREVIEW_LENGTH).trimEnd()}...`;

  return (
    <Card
      className={cn(
        'flex flex-col transition-shadow hover:shadow-lg',
        className
      )}
    >
      <CardHeader>
        <div className='mb-4 relative h-48 w-full overflow-hidden rounded-xl bg-blue-50'>
          <Image
            src={product.image}
            alt={product.nama}
            fill
            className='object-cover'
            sizes='(max-width: 1024px) 50vw, 25vw'
          />
        </div>
        <CardTitle className='text-xl font-semibold'>{product.nama}</CardTitle>
        <CardDescription
          className={`text-base ${
            isExpandable ? 'cursor-pointer select-none' : ''
          }`}
          onClick={
            isExpandable ? () => setIsExpanded((value) => !value) : undefined
          }
          aria-expanded={isExpanded}
        >
          {displayText}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
