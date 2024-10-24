// components/Results.js
import Link from 'next/link';

const Results = ({ score, totalQuestions }) => {
  return (
    <div>
      <p>Quiz complet! Felicitări! Punctajul tău este: {score} din {totalQuestions}</p>
      <Link href="/categories">
        <button>Înapoi la categorii</button>
      </Link>
    </div>
  );
};

export default Results;