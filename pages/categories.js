import Link from 'next/link';

export default function Categories() {
  const categories = [
    { id: 1, name: 'Cultură Generală' },
  ];

  return (
    <div>
      <h1>Categorii</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/quiz/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
