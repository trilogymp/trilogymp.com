import PropTypes from 'prop-types';
import Head from 'next/head';

export default function Description({ children }) {
  const description =
    children ||
    'Trilogy Multiplayer (TMP) is a work in progress nonprofit open source multiplayer software project for Grand Theft Auto: The Trilogy.';

  return (
    <Head>
      <meta name="description" value={description} />
      <meta property="og:description" value={description} />
    </Head>
  );
}

Description.propTypes = {
  children: PropTypes.string,
};
