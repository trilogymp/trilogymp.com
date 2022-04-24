import styles from './disclaimer.module.scss';

import Container from '@/components/container';

export default function Disclaimer() {
  return (
    <section className={styles.root}>
      <Container>
        <p>
          <strong>DISCLAIMER</strong>
        </p>
        <p>
          Trilogy Multiplayer is not affiliated with or endorsed by Rockstar
          Games, Take-Two Interactive or other rightsholders.
        </p>
        <p>
          Rockstar Games, Grand Theft Auto, Grand Theft Auto: The Trilogy - The
          Definitive Edition, Grand Theft Auto III, Grand Theft Auto: Vice City,
          Grand Theft Auto: San Andreas and R* logo are marks/logos/copyrights
          of Take-Two Interactive. Any trademarks used belong to their
          respective owners.
        </p>
        <p>
          A legitimate copy of Grand Theft Auto: The Trilogy - The Definitive
          Edition is required to be able to play multiplayer.
        </p>
      </Container>
    </section>
  );
}
