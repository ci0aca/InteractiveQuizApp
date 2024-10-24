// pages/quiz/[quizId]/question/[questionId].js
import { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0); 
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correct) {
      setIsAnswerCorrect(true);
      setUserScore(userScore + 1); 
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer('');
      setIsAnswerCorrect(null);
    } else {
      setIsQuizFinished(true); 
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserScore(0); 
    setIsQuizFinished(false);
    setSelectedAnswer('');
    setIsAnswerCorrect(null);
  };

  return (
    <div>
      <h1>Quiz Cultură Generală</h1>
      <p>Punctaj: {userScore}</p>
      {isQuizFinished ? (
        <div>
          <h2>Quiz complet! Felicitări!</h2>
          <p>Punctajul tău este: {userScore}</p>
          <button onClick={handleRestartQuiz}>Restart</button>
        </div>
      ) : (
        <div>
          <h2>{currentQuestion.text}</h2>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerSelection(option)}>
                {option}
              </li>
            ))}
          </ul>
          {isAnswerCorrect !== null && (
            <p>
              {isAnswerCorrect ? 'Corect!' : `Greșit! Răspunsul corect este: ${currentQuestion.correct}`}
            </p>
          )}
          {isAnswerCorrect !== null && (
            <button onClick={handleNextQuestion}>Următoarea întrebare</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;