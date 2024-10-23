// pages/quiz/[quizId].js
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Quiz = ({ quizId }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

 
  useEffect(() => {
    const fetchQuizData = async () => {
      const response = await fetch(`/api/questions?quizId=${quizId}`);
      const data = await response.json();
      setQuiz(data);
    };

    fetchQuizData();
  }, [quizId]);

  const handleOptionClick = (option) => {
    if (selectedOption) return; 
    setSelectedOption(option);
    if (option === quiz.questions[currentQuestionIndex].correct) {
      setFeedback('Corect!');
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedback(`Greșit! Răspunsul corect este: ${quiz.questions[currentQuestionIndex].correct}`);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setFeedback('');
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const totalQuestions = quiz ? quiz.questions.length : 0; 

  return (
    <div>
      <h1>{quiz ? quiz.title : 'Încărcare...'}</h1>
      <p>Punctaj: {score}</p>
      {quiz && currentQuestionIndex < totalQuestions ? (
        <div>
          <p>{quiz.questions[currentQuestionIndex].text}</p>
          <ul>
            {quiz.questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
          {selectedOption && <p>{feedback}</p>}
          {selectedOption && (
            <button onClick={handleNextQuestion}>Întrebarea următoare</button>
          )}
        </div>
      ) : (
        <div>
          <p>Quiz complet! Felicitări! Punctajul tău este: {score}</p>
          <p>Numărul total de întrebări: {totalQuestions}</p>
          <p>Numărul de răspunsuri corecte: {score}</p>
          <p>{score === totalQuestions ? 'Excelent!' : 'Încercă din nou!'}</p>
          <Link href="/categories">
            <button>Înapoi la categorii</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { quizId } = context.params;
  return { props: { quizId } };
}

export default Quiz;
