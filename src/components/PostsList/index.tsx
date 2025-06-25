import { postRepository } from '@/repositories/post/json-post-repository';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className=' grid grid-cols-1   gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col group gap-4' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <div className='flex flex-col gap-4 sm:justify-center'>
              <time
                className='text-slate-600 block text-sm/tight'
                dateTime={post.createdAt}
              >
                23/06/2025 17:00
              </time>
              <PostHeading as='h2' url={postLink}>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
