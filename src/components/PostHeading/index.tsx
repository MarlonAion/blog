import Link from 'next/link';

type PostHeadingPorps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingPorps) {
  return (
    <Tag className='text-2xl/tight font-extrabold sm:text-4xl'>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
