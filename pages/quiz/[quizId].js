import Link from 'next/link';
import { useRouter } from 'next/router';

const quizzes = {
  1: {
    title: 'Quiz Cultură Generală',
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

export default function Quiz() {
  const router = useRouter();
  const { quizId } = router.query;
  const quiz = quizzes[quizId];

  return (
    <div>
      <h1>{quiz.title}</h1>
      <Link href={`/quiz/${quizId}/question/1`}>Începe Quiz</Link>
    </div>
  );
}
