import styles from './intro.module.scss';

import Container from '@components/container';
import Image from '@components/image';

export default function Intro() {
  return (
    <section className={styles.root}>
      <Container>
        <h1>Trilogy Multiplayer</h1>

        <p>
          <strong>Trilogy Multiplayer</strong> is a work in progress nonprofit{' '}
          <strong>open source</strong> multiplayer software project for Rockstar
          Games&apos; Grand Theft Auto: The Trilogy – The Definitive Edition
          with a primary goal of adding <strong>multiplayer</strong>{' '}
          functionality with an easy <strong>scripting</strong> interface for
          you to create <strong>unique experiences</strong> to{' '}
          <strong>play together</strong> with your <strong>friends</strong> in
          all three of the genre-defining classics.
        </p>

        <div className={styles.socials}>
          <p>
            <strong>Follow our socials for project updates:</strong>
          </p>

          <ul className={styles.socials__list}>
            <li>
              <a
                className={styles.socials__link}
                href="https://twitter.com/trilogymp"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt=""
                  height="64"
                  priority
                  src="/icon-twitter.svg"
                  width="64"
                />
                <span className={styles['icon-label']}>Twitter</span>
              </a>
            </li>

            <li>
              <a
                className={styles.socials__link}
                href="https://github.com/trilogymp"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt=""
                  height="64"
                  priority
                  src="/icon-github.svg"
                  width="64"
                />
                <span className={styles['icon-label']}>GitHub</span>
              </a>
            </li>

            <li>
              <a
                className={styles.socials__link}
                href="https://discord.com/invite/trilogymp"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt=""
                  height="64"
                  priority
                  src="/icon-discord.svg"
                  width="64"
                />
                <span className={styles['icon-label']}>Discord</span>
              </a>
            </li>

            <li>
              <a
                className={styles.socials__link}
                href="https://www.twitch.com/trilogymp"
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt=""
                  height="64"
                  priority
                  src="/icon-twitch.svg"
                  width="64"
                />
                <span className={styles['icon-label']}>Twitch</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
