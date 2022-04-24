import type { NextPage } from 'next';
import Intro from '@/blocks/intro';
import Disclaimer from '@/blocks/disclaimer';

export const Home: NextPage = () => {
  return (
    <main>
      <Intro />
      <Disclaimer />
    </main>
  );
};

export default Home;
