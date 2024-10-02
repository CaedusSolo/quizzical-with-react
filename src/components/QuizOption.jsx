import React from "react";

function QuizOption(props) {
  return (
    <div className="radio">
      <input
        type="radio"
        name={`option-${props.questionId}`} // Make name unique by including questionId
        id={`option-${props.questionId}-${props.index}`} // Ensure a unique id per option
      />
      <label htmlFor={`option-${props.questionId}-${props.index}`}>
        {props.option}
      </label>
    </div>
  );
}

export default QuizOption;