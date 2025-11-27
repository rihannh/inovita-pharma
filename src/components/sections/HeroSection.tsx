import Image from 'next/image';

import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id='home'
      className='relative overflow-hidden py-20 md:py-32 min-h-[80vh] md:min-h-[60vh] lg:min-h-[90vh]'
    >
      <Image
        src='/images/pharma.jpg'
        alt='Latar farmasi yang merepresentasikan inovasi kesehatan'
        fill
        priority
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='pointer-events-none absolute inset-0 bg-linear-to-br from-blue-200/90 via-white/70 to-green-200/90' />
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white via-white/90 to-transparent' />
      <div className='relative z-10'>
        <div className='container mx-auto px-4 md:px-12'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
              Inovasi Farmasi untuk{' '}
              <span className='text-blue-700'>Kesehatan Masyarakat</span>
            </h1>
            <p className='mb-8 text-lg text-gray-700 sm:text-xl'>
              Kami berkomitmen menyediakan produk farmasi berkualitas tinggi
              dengan standar internasional untuk meningkatkan kualitas hidup dan
              kesehatan masyarakat Indonesia.
            </p>
            <Button size='lg' className='gap-2 px-8 py-6 text-lg'>
              Pelajari Lebih Lanjut
              <ArrowRight className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
