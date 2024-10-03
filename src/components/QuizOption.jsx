import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function QuizOption(props) {
  const { updateSelectedOptions, selectedOptions, quizResults } = useContext(AppContext);

  function handleChange() {
    updateSelectedOptions(props.questionId, props.index);
  }

  function optionIsSelected() {
    return selectedOptions.some(
      (option) =>
        option.questionId === props.questionId &&
        option.selectedOptionIndex === props.index
    );
  }

  const checkedStyle = {
    backgroundColor: optionIsSelected() && "#B77DFF",
    fontWeight: optionIsSelected() && "bold"
  };

  return (
    <div className="radio" style={checkedStyle}>
      <input
        type="radio"
        name={`option-${props.questionId}`} // Unique name per question
        id={`option-${props.questionId}-${props.index}`}
        onChange={handleChange}
      />
      <label htmlFor={`option-${props.questionId}-${props.index}`}>
        {props.option}
      </label>
    </div>
  );
}

export default QuizOption;
