import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function QuizOption(props) {

  const {updateSelectedOptions} = useContext(AppContext)
  const [isChecked, setIsChecked] = useState(false)

  function handleChange() {
    setIsChecked(prevState => !prevState)
    updateSelectedOptions(props.questionId, props.index)
  }

  return (
    <div className="radio">
      <input
        type="radio"
        name={`option-${props.questionId}`} // Make name unique by including questionId
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