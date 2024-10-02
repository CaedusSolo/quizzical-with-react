import React from "react";
import QuizQuestion from "./QuizQuestion";
import QuizOption from "./QuizOption";
import { AppContext } from "../App";

function QuizItem(props) {
  return (
    <div className="quizItem">
      <QuizQuestion question={props.question} />
      {props.options.map((option, index) => (
        <QuizOption
          key={index}
          questionId={props.id} // Pass a unique question ID
          index={index}
          option={option}
        />
      ))}
    </div>
  );
}

export default QuizItem;

