// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bine ai venit la Quiz!</h1>
      <Link href="/categories" className={styles.link}>
        Vezi Categorii
      </Link>
    </div>
  );
}