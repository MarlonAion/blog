import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          alt: 'alt da imgem',
          src: '/images/bryen_9.png',
          priority: true,
        }}
      />

      <div className='flex flex-col gap-4 sm:justify-center'>
        <time
          className='text-slate-600 block text-sm/tight'
          dateTime='2025-06-23'
        >
          23/06/2025 17:00
        </time>
        <PostHeading as='h1' url={postLink}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          aspernatur doloremque illum necessitatibus impedit fuga, voluptatem
          architecto a! Eius mollitia maxime at voluptas est ea illo explicabo,
          itaque pariatur sunt.
        </p>
      </div>
    </section>
  );
}
