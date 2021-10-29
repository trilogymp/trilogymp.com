import NextImage from 'next/image';

export default function Image({ ...rest }) {
  return <NextImage loader={({ src }) => src} unoptimized {...rest} />;
}
