'use client';

import {useState} from 'react';
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {activityData} from '../../../public/data/activity_list';

const csrActivities = activityData.flat();
const DESCRIPTION_PREVIEW_LENGTH = 180;

export function CSRSection() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<
    Record<number, boolean>
  >({});

  const toggleDescription = (activityId: number) => {
    setExpandedDescriptions((previous) => ({
      ...previous,
      [activityId]: !previous[activityId],
    }));
  };

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 md:px-12'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 md:text-4xl'>
            Kegiatan Kemasyarakatan
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-600'>
            Komitmen kami terhadap tanggung jawab sosial dan pemberdayaan
            masyarakat
          </p>
        </div>
        <Carousel
          opts={{align: 'start', loop: false}}
          className='relative px-2 md:px-8'
        >
          <CarouselContent>
            {csrActivities.map((activity) => {
              const description = activity.deskripsi;
              const isExpandable =
                description.length > DESCRIPTION_PREVIEW_LENGTH;
              const isExpanded = Boolean(expandedDescriptions[activity.id]);
              const displayText =
                !isExpandable || isExpanded
                  ? description
                  : `${description
                      .slice(0, DESCRIPTION_PREVIEW_LENGTH)
                      .trimEnd()}...`;

              return (
                <CarouselItem
                  key={activity.id}
                  className='basis-full sm:basis-3/4 md:basis-1/2 xl:basis-1/3'
                >
                  <Card className='h-full pt-0 overflow-hidden transition-shadow hover:shadow-lg'>
                    <div className='relative h-64 w-full overflow-hidden'>
                      <Image
                        src={activity.image_path}
                        alt={activity.alt_text}
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw'
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className='text-xl'>
                        {activity.nama_kegiatan}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription
                        className={`text-base text-gray-600 ${
                          isExpandable ? 'cursor-pointer select-none' : ''
                        }`}
                        onClick={
                          isExpandable
                            ? () => toggleDescription(activity.id)
                            : undefined
                        }
                        aria-expanded={isExpanded}
                      >
                        {displayText}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex -left-6 top-1/2 -translate-y-1/2' />
          <CarouselNext className='hidden md:flex -right-6 top-1/2 -translate-y-1/2' />
        </Carousel>
      </div>
    </section>
  );
}
