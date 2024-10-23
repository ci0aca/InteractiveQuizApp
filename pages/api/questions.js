// pages/api/questions.js
import questions from '../../data/questions.json';

export default function handler(req, res) {
  const { quizId } = req.query;
  const quiz = questions.quizzes[quizId];
  
  if (quiz) {
    res.status(200).json(quiz);
  } else {
    res.status(404).json({ message: 'Quiz not found' });
  }
}