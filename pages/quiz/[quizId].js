// pages/quiz/[quizId].js
import { useState } from 'react';
import questions from '../../data/questions.json';
import Question from '../../components/Question';
import Results from '../../components/Results';
import Link from 'next/link';

const Quiz = ({ quizId }) => {
  const quiz = questions.quizzes[quizId];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const handleOptionClick = (option) => {
    if (isAnswerSelected) return; 

    setSelectedOption(option);
    setIsAnswerSelected(true);  

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
    setIsAnswerSelected(false); 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setFeedback('');
    setIsAnswerSelected(false);
  };

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>Punctaj: {score}</p>
      {currentQuestionIndex < quiz.questions.length ? (
        <div>
          <p>{quiz.questions[currentQuestionIndex].text}</p>
          <ul>
            {quiz.questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)} style={{ pointerEvents: isAnswerSelected ? 'none' : 'auto' }}>
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
          <p>Quiz complet! Felicitări!</p>
          <p>Total întrebări: {quiz.questions.length}</p>
          <p>Răspunsuri corecte: {score}</p>
          {score / quiz.questions.length > 0.5 ? (
            <p>Bravo! Ai obținut un punctaj bun!</p>
          ) : (
            <p>Încearcă din nou, ești pe drumul cel bun!</p>
          )}
          <button onClick={handleRestartQuiz}>Reîncepe Quiz-ul</button>
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