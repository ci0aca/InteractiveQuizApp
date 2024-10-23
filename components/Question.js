// components/Question.js
const Question = ({ question, onOptionClick, selectedOption, feedback }) => {
    return (
      <div>
        <p>{question.text}</p>
        <ul>
          {question.options.map((option, index) => (
            <li 
              key={index} 
              onClick={() => onOptionClick(option)} 
              style={{ cursor: 'pointer', fontWeight: selectedOption === option ? 'bold' : 'normal' }}
            >
              {option}
            </li>
          ))}
        </ul>
        {selectedOption && <p>{feedback}</p>}
      </div>
    );
  };
  
  export default Question;