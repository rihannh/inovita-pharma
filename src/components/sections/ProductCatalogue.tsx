'use client';

import {useMemo, useState, type ChangeEvent} from 'react';
import {Product, ProductCard} from './ProductCard';

type ProductCatalogueProps = {
  products: Product[];
};

export function ProductCatalogue({products}: ProductCatalogueProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) => {
      const nameMatch = product.nama.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = product.deskripsi
        .toLowerCase()
        .includes(normalizedQuery);

      return nameMatch || descriptionMatch;
    });
  }, [products, normalizedQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const resultsCount = filteredProducts.length;
  const queryActive = Boolean(normalizedQuery);

  return (
    <div>
      <div className='mx-auto mb-12 max-w-xl text-left'>
        <div className='mt-2 flex items-center gap-3'>
          <input
            id='product-search'
            type='search'
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Cari berdasarkan nama atau deskripsi produk...'
            className='w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40'
          />
          {queryActive ? (
            <button
              type='button'
              onClick={() => setSearchQuery('')}
              className='rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:text-gray-900'
            >
              Reset
            </button>
          ) : null}
        </div>
        <p className='mt-3 text-sm text-gray-500'>
          {queryActive
            ? `Menampilkan ${resultsCount} produk untuk kata kunci "${searchQuery}".`
            : `Menampilkan seluruh ${resultsCount} produk dalam katalog.`}
        </p>
      </div>

      {resultsCount > 0 ? (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className='h-full'
            />
          ))}
        </div>
      ) : (
        <div className='rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center text-gray-500'>
          Tidak ditemukan produk yang sesuai dengan pencarian Anda.
        </div>
      )}
    </div>
  );
}
