// components/Question.js
import { useState } from 'react';

const Question = ({ question, onOptionClick, selectedOption, feedback }) => {
  return (
    <div>
      <p>{question.text}</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {question.options.map((option, index) => (
          <li 
            key={index} 
            onClick={() => onOptionClick(option)} 
            style={{
              cursor: 'pointer',
              fontWeight: selectedOption === option ? 'bold' : 'normal',
              backgroundColor: selectedOption === option ? '#b3e5fc' : '#f0f0f0',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '8px',
              transition: 'transform 0.2s, background-color 0.3s',
              transform: selectedOption === option ? 'scale(1.05)' : 'scale(1)',
            }}
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