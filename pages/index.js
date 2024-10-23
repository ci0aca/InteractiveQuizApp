import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bine ai venit la Quiz!</h1>
      <Link href="/categories">Vezi Categorii</Link>
    </div>
  );
}
