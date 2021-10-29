import Intro from '@blocks/intro';
import Disclaimer from '@blocks/disclaimer';

import Title from '@components/title';
import Description from '@components/description';

export default function Home() {
  return (
    <>
      <Title />
      <Description />

      <main>
        <Intro />
        <Disclaimer />
      </main>
    </>
  );
}
