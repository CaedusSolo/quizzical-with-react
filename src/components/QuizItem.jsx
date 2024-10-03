import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizOption from "./QuizOption";
import { AppContext } from "../App";

function QuizItem(props) {

  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className="quizItem">
      <QuizQuestion question={props.question} />
      {props.options.map((option, index) => (
        <QuizOption
          key={index}
          questionId={props.id} 
          index={index}
          option={option}
        />
      ))}
    </div>
  );
}

export default QuizItem;