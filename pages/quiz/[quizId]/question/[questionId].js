import { useRouter } from 'next/router';

const quizzes = {
  1: {
    questions: [
      {
        id: 1,
        text: 'Care este capitala României?',
        options: ['București', 'Cluj', 'Timișoara', 'Iași'],
        correct: 'București',
      },
      {
        id: 2,
        text: 'Cine a scris "Scrisoarea III"?',
        options: ['Mihai Eminescu', 'George Coșbuc', 'Vasile Alecsandri', 'Mihai Viteazul'],
        correct: 'Mihai Eminescu',
      },
      {
        id: 3,
        text: 'Care este cel mai lung fluviu din lume?',
        options: ['Amazon', 'Nil', 'Dunărea', 'Mississippi'],
        correct: 'Amazon',
      },
    ],
  },
};

export default function Question() {
  const router = useRouter();
  const { quizId, questionId } = router.query;
  const quiz = quizzes[quizId];
  const currentQuestionId = parseInt(questionId);
  const question = quiz.questions.find(q => q.id === currentQuestionId);

  const goToNextQuestion = () => {
    const nextQuestionId = currentQuestionId + 1;
    if (nextQuestionId <= quiz.questions.length) {
      router.push(`/quiz/${quizId}/question/${nextQuestionId}`);
    } else {
      alert('Ai terminat quiz-ul!'); // Sau poți redirecționa către o pagină de rezultate
    }
  };

  return (
    <div>
      <h1>{question.text}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <button onClick={goToNextQuestion}>Întrebarea următoare</button>
    </div>
  );
}

