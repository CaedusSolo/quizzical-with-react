import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import QuizItem from "./QuizItem";

function QuizPage() {
  const { quizData, selectedOptions, checkUserAnswers, quizResults, onPlayAgain, getQuizScore } =
    useContext(AppContext);

  const [isQuizRendered, setIsQuizRendered] = useState(false)

  useEffect(() => {
    if (quizData.length === 5) {
      setIsQuizRendered(true)
    }
  },[quizData])

  function mapQuizData() {
    return quizData.map((item) => {
      return (
        <QuizItem
          question={item.question}
          answer={item.correct_answer}
          options={item.options}
          id={item.id}
        />
      );
    });
  }

  return (
    <div className="quizPage">
      {mapQuizData()}
      {quizResults ? (
        <div className="quizResultsSummary">
          <h3>Your score was: {getQuizScore()}/5</h3>
          <button 
          className="check-btn active start-btn"
          onClick={onPlayAgain}
          >Play Again</button>
        </div>
      ) : 
      isQuizRendered &&
      (
        <button
          className={
            quizData.length !== selectedOptions.length
              ? "check-btn disabled"
              : "check-btn active"
          }
          onClick={checkUserAnswers}
          disabled={quizData.length !== selectedOptions.length}
        >
          Check Answers
        </button>
      )}
    </div>
  );
}

export default QuizPage;
