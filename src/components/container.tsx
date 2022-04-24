import type { ReactNode } from 'react';

import styles from './container.module.scss';

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className={styles.root}>{children}</div>;
}
