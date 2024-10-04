import React, { useContext } from "react";
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

  const quizResult = quizResults?.find(result => result.questionId === props.questionId)

  const getOptionStyle = () => {
    if (quizResult) {
      const isSelected = optionIsSelected()
      const isCorrectAnswer = props.option === quizResult.correctAnswer

      if (isSelected) {
        return {
          backgroundColor: quizResult.isCorrect ? "#94D7A2" : "#F8BCBC",
          fontWeight: "bold",
          color: "white"
        }
      }

      if (isCorrectAnswer) {
        return {
          backgroundColor: "#94D7A2",
          fontWeight: "bold",
          color: "white"
        }
      }

      return {
        backgroundColor: "silver",
        opacity: 0.6,
        color: 'white',
        cursor: 'auto'
      }

    }
    return {
      backgroundColor: optionIsSelected() ? "#B77DFF" : "transparent",
      fontWeight: optionIsSelected() ? "bold" : "normal"
    };
  }


  return (
    <div className="radio" style={getOptionStyle()}>
      <input
        type="radio"
        name={`option-${props.questionId}`} // Unique name per question
        id={`option-${props.questionId}-${props.index}`}
        onChange={handleChange}
        disabled={quizResults}
      />
      <label htmlFor={`option-${props.questionId}-${props.index}`}>
        {props.option}
      </label>
    </div>
  );
}

export default QuizOption;
