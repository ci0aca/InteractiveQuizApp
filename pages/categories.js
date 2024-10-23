// pages/categories.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AddQuestion from '../components/AddQuestion';
import questions from '../data/questions.json';
import styles from '../styles/Categories.module.css'; 

const Categories = () => {
  const [quizzes, setQuizzes] = useState(questions.quizzes);
  const [selectedQuiz, setSelectedQuiz] = useState(Object.keys(questions.quizzes)[0]); 
  const [score, setScore] = useState(0); 

  useEffect(() => {
    
    const storedQuestions = localStorage.getItem('questions');
    if (storedQuestions) {
      setQuizzes(JSON.parse(storedQuestions));
    }
  }, []);

  const addQuestion = (newQuestion) => {
    const updatedQuizzes = { ...quizzes };

    
    updatedQuizzes[selectedQuiz].questions.push(newQuestion);

    
    localStorage.setItem('questions', JSON.stringify(updatedQuizzes));
    setQuizzes(updatedQuizzes);
  };

  return (
    <div className={styles.container}>
      <h1>Categorii</h1>
      <div className={styles.quizList}>
        <h2>Quiz-uri disponibile:</h2>
        <ul>
          {Object.keys(quizzes).map((quizId) => (
            <li key={quizId}>
              <Link href={`/quiz/${quizId}`}>{quizzes[quizId].title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.addQuestion}>
        <h2>Adaugă o întrebare nouă:</h2>
        <label htmlFor="quiz-select">Selectează categoria:</label>
        <select
          id="quiz-select"
          value={selectedQuiz}
          onChange={(e) => setSelectedQuiz(e.target.value)}
        >
          {Object.keys(quizzes).map((quizId) => (
            <option key={quizId} value={quizId}>
              {quizzes[quizId].title}
            </option>
          ))}
        </select>
        <AddQuestion onAdd={addQuestion} />
      </div>
    </div>
  );
};

export default Categories;