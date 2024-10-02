import React from "react";
import QuizQuestion from "./QuizQuestion";
import QuizOption from "./QuizOption";

function QuizItem(props) {
  return (
    <div className="quizItem">
      <QuizQuestion question={props.question} />
      {props.options.map((option, index) => (
        <QuizOption index={index} option={option} />
      ))}
    </div>
  );
}

export default QuizItem;
