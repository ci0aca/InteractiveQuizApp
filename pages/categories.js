// pages/categories.js
import Link from 'next/link'; 
import questions from '../data/questions.json'; 

const Categories = () => {
  const quizzes = questions.quizzes; 

  return (
    <div>
      <h1>Categorii</h1>
      <ul>
        {Object.keys(quizzes).map((quizId) => (
          <li key={quizId}>
            <Link href={`/quiz/${quizId}`}>
              {quizzes[quizId].title} {/* Afișează titlul quiz-ului */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;