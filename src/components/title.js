import PropTypes from 'prop-types';
import Head from 'next/head';

export default function Title({ children }) {
  const title = `${children ? `${children} – ` : ''}Trilogy Multiplayer`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" value={title} />
    </Head>
  );
}

Title.propTypes = {
  children: PropTypes.string,
};
