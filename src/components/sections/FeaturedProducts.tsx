'use client';

import Link from 'next/link';
import {productData} from '../../../public/data/product_list';
import {ProductCard} from './ProductCard';
import {Button} from '../ui/button';

const featuredProducts = productData.slice(0, 4);

export function FeaturedProducts() {
  return (
    <section id='produk' className='py-20 bg-white'>
      <div className='container mx-auto px-4 md:px-12'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-blue-600 md:text-4xl'>
            Produk Unggulan
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-600'>
            Produk-produk terbaik kami yang telah dipercaya oleh tenaga medis
            dan pasien di seluruh Indonesia
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='mt-10 text-center'>
          <Button size='lg' className='px-8' asChild>
            <Link href='/produk'>Lihat Semua Produk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
