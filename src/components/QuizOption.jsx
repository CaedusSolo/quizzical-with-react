import React from 'react'

function QuizOption(props) {
  return (
    <div key={props.index} className="radio">
      <input type="radio" 
    name="option" 
    id={`option-${props.index}`} 
    />
    <label htmlFor={`option-${props.index}`}>{props.option}</label>
  </div>
  )
}

export default QuizOption