'use client';

import Image from 'next/image';

import {Badge} from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Layers, Stethoscope, Users2} from 'lucide-react';

const directorateHighlights = [
  {
    icon: Users2,
    title: 'Kepemimpinan Terpadu',
    description:
      'Dewan direksi memastikan setiap unit bergerak selaras dengan visi perusahaan.',
  },
  {
    icon: Layers,
    title: 'Struktur Fleksibel',
    description:
      'Pembagian divisi memungkinkan koordinasi lintas fungsi yang cepat dan efektif.',
  },
  {
    icon: Stethoscope,
    title: 'Fokus Kesehatan',
    description:
      'Setiap departemen memiliki indikator kinerja yang berpusat pada mutu layanan kesehatan.',
  },
];

const divisionSummary = [
  {
    name: 'Divisi Produksi',
    detail:
      'Menangani formulasi, manufaktur, dan pengawasan mutu produk farmasi.',
  },
  {
    name: 'Divisi Riset & Inovasi',
    detail:
      'Mengembangkan pipeline produk baru dan melakukan validasi ilmiah bersama akademisi.',
  },
  {
    name: 'Divisi Distribusi & Logistik',
    detail:
      'Mengelola rantai pasok sehingga produk didistribusikan tepat waktu ke seluruh jaringan.',
  },
  {
    name: 'Divisi Komersial & Kemitraan',
    detail:
      'Membangun kolaborasi strategis dengan fasilitas kesehatan dan mitra industri.',
  },
];

export function OrganizationStructureSection() {
  return (
    <section id='struktur' className='bg-gray-50 py-20'>
      <div className='container mx-auto px-4 md:px-12'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-blue-600 md:text-4xl'>
            Struktur Organisasi
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-600'>
            Kolaborasi lintas divisi untuk memastikan mutu layanan dan inovasi
            berkelanjutan.
          </p>
        </div>

        <div className='mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.2fr_1fr]'>
          {/* Organizational chart preview */}
          <div className='flex justify-center'>
            <Dialog>
              <DialogTrigger asChild>
                <button className='group relative w-full overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'>
                  <div className='absolute inset-0 bg-linear-to-br from-blue-500/15 via-transparent to-emerald-400/20 opacity-0 transition group-hover:opacity-100' />
                  <div className='relative aspect-4/3 w-full'>
                    <Image
                      src='/images/struktur.png'
                      alt='Struktur organisasi PT Inovita Pharma'
                      fill
                      className='object-contain p-6'
                      sizes='(min-width: 1024px) 60vw, 100vw'
                      priority
                    />
                  </div>
                  <div className='absolute inset-x-0 bottom-0 flex items-center justify-between bg-white/90 px-5 py-4 text-sm font-medium text-gray-700 backdrop-blur'>
                    <span>Diagram Struktur Organisasi</span>
                    <span className='text-blue-600'>Klik untuk perbesar</span>
                  </div>
                  <Badge
                    variant='secondary'
                    className='absolute left-4 top-4 bg-blue-600 text-white shadow-sm'
                  >
                    Integrasi Tim
                  </Badge>
                </button>
              </DialogTrigger>
              <DialogContent className='border-none bg-transparent p-0 shadow-none sm:max-w-4xl'>
                <DialogHeader className='sr-only'>
                  <DialogTitle>Diagram Struktur Organisasi</DialogTitle>
                  <DialogDescription>
                    Tampilan ukuran penuh struktur organisasi perusahaan.
                  </DialogDescription>
                </DialogHeader>
                <div className='relative aspect-4/3 w-full rounded-2xl bg-white p-4 sm:p-6'>
                  <Image
                    src='/images/struktur.png'
                    alt='Struktur organisasi PT Inovita Pharma - tampilan penuh'
                    fill
                    className='object-contain'
                    sizes='(min-width: 1024px) 60vw, 100vw'
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Highlights */}
          <Card className='border-blue-100 bg-white/95 shadow-sm backdrop-blur'>
            <CardHeader>
              <CardTitle className='text-2xl'>Direksi & Tata Kelola</CardTitle>
              <CardDescription className='text-base text-gray-600'>
                Struktur organisasi kami menekankan peran jelas, jalur pelaporan
                yang transparan, dan kolaborasi antar fungsi untuk mendukung
                pertumbuhan berkelanjutan.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-5'>
              {directorateHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className='flex items-start gap-4 rounded-lg bg-blue-50/40 p-4'
                  >
                    <span className='flex h-10 w-10 px-2 items-center justify-center rounded-lg bg-blue-100 text-blue-600'>
                      <Icon className='h-5 w-5' />
                    </span>
                    <div>
                      <p className='font-semibold text-gray-900'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-600'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
