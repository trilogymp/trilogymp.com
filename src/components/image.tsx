import NextImage from 'next/image';

export default function Image({ ...rest }) {
  return <NextImage src={''} loader={({ src }) => src} unoptimized {...rest} />;
}
