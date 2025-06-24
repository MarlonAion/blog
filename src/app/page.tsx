import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Link from 'next/link';
import { Suspense } from 'react';
import Image from 'next/image';
import { PostHeading } from '@/components/PostHeading';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full  overflow-hidden rounded-xl' href='#'>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo'
            priority
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-06-23'
          >
            23/06/2025 17:00
          </time>
          <PostHeading as='h1' url='#'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            repudiandae magni omnis? Aperiam dolores perferendis id, porro harum
            quae eos. Illum nesciunt id sequi. Autem error voluptate saepe
            necessitatibus explicabo!
          </PostHeading>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          aspernatur doloremque illum necessitatibus impedit fuga, voluptatem
          architecto a! Eius mollitia maxime at voluptas est ea illo explicabo,
          itaque pariatur sunt.
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className='text-6xl font-bold text-center py-8'>aFooter</h1>
      </footer>
    </Container>
  );
}
