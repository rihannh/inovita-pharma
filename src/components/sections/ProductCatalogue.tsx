'use client';

import {useMemo, useState, type ChangeEvent, type MouseEvent} from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {Product, ProductCard} from './ProductCard';

type ProductCatalogueProps = {
  products: Product[];
};

const ITEMS_PER_PAGE = 8;

export function ProductCatalogue({products}: ProductCatalogueProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  };

  const resultsCount = filteredProducts.length;
  const queryActive = Boolean(normalizedQuery);
  const totalPages = Math.max(1, Math.ceil(resultsCount / ITEMS_PER_PAGE));
  const activePage = Math.min(currentPage, totalPages);
  const pageIndex = activePage - 1;
  const paginatedProducts = filteredProducts.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (activePage > 1) {
      setCurrentPage(activePage - 1);
    }
  };

  const handleNext = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (activePage < totalPages) {
      setCurrentPage(activePage + 1);
    }
  };

  const startResult = resultsCount === 0 ? 0 : pageIndex * ITEMS_PER_PAGE + 1;
  const endResult =
    resultsCount === 0
      ? 0
      : Math.min(
          pageIndex * ITEMS_PER_PAGE + paginatedProducts.length,
          resultsCount
        );

  const resultsMessage = queryActive
    ? resultsCount > 0
      ? `Menampilkan ${startResult}-${endResult} dari ${resultsCount} produk untuk kata kunci "${searchQuery}".`
      : `Tidak ada produk yang sesuai dengan kata kunci "${searchQuery}".`
    : resultsCount > 0
    ? `Menampilkan ${startResult}-${endResult} dari total ${resultsCount} produk dalam katalog.`
    : 'Belum ada produk dalam katalog.';

  return (
    <div>
      <div className='mx-auto mb-12 max-w-xl text-left'>
        <label htmlFor='product-search' className='sr-only'>
          Cari Produk
        </label>
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
              onClick={() => {
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className='rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:text-gray-900'
            >
              Reset
            </button>
          ) : null}
        </div>
        <p className='mt-3 text-sm text-gray-500'>{resultsMessage}</p>
      </div>

      {resultsCount > 0 ? (
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {paginatedProducts.map((product) => (
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

      {resultsCount > ITEMS_PER_PAGE ? (
        <Pagination className='mt-12'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href='#'
                onClick={handlePrevious}
                aria-disabled={activePage === 1}
                className={
                  activePage === 1 ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
            {Array.from({length: totalPages}).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href='#'
                    onClick={(event) => {
                      event.preventDefault();
                      handlePageChange(pageNumber);
                    }}
                    isActive={activePage === pageNumber}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                href='#'
                onClick={handleNext}
                aria-disabled={activePage === totalPages}
                className={
                  activePage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : null}
    </div>
  );
}
