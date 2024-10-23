import { useState } from 'react';
import styles from '../styles/AddQuestion.module.css'; 

const AddQuestion = ({ onAdd }) => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      text: questionText,
      options: options,
      correct: correctAnswer,
    };
    onAdd(newQuestion);
    setQuestionText('');
    setOptions(['']);
    setCorrectAnswer('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <label>Întrebare:</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className={styles.inputField} 
          required
        />
      </div>
      <div>
        <label>Opțiuni:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className={styles.inputField} 
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>Adaugă opțiune</button>
      </div>
      <div>
        <label>Răspuns corect:</label>
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className={styles.inputField} 
          required
        />
      </div>
      <button type="submit">Adaugă întrebare</button>
    </form>
  );
};

export default AddQuestion;