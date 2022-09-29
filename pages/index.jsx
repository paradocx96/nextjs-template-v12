import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://navinda.me" target="_blank" rel="noopener noreferrer">
          Next JS Template v12&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
