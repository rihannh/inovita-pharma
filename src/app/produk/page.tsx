import type {Metadata} from 'next';
import Link from 'next/link';

import {productData} from '../../../public/data/product_list';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import {ProductCatalogue} from '@/components/sections/ProductCatalogue';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export const metadata: Metadata = {
  title: 'Seluruh Produk | PharmaFirst',
  description:
    'Telusuri katalog lengkap produk PharmaFirst, mencakup solusi farmasi dan perawatan kesehatan untuk kebutuhan medis di seluruh Indonesia.',
};

export default function ProdukPage() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 md:px-12'>
          <Breadcrumb className='mb-8'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='/'>Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Produk</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className='mb-4 text-center'>
            <h1 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
              Semua Produk PharmaFirst
            </h1>
            <p className='mx-auto max-w-3xl text-lg text-gray-600'>
              Jelajahi deretan lengkap produk kami yang mencakup berbagai
              kategori, dari sediaan antibiotik hingga perawatan suportif bagi
              tenaga medis dan pasien.
            </p>
          </div>
          <ProductCatalogue products={productData} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
