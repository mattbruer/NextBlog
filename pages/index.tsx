// import styles from '@/styles/Home.module.css';

import { CSSProperties } from 'react';

export default function HomePage() {
  return <div style={styles.container as CSSProperties}>Homepage</div>;
}

const styles = {
  container: {
    textAlign: 'center',
    fontSize: '30px',
    border: '1px solid black',
    height: 'calc(100vh - 40px)',
  },
};
