import React, { useState } from "react";
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
          questionId={props.id}
          index={index}
          option={option}
          answer={props.answer}
        />
      ))}
    </div>
  );
}

export default QuizItem;
