import React from 'react'

function QuizQuestion(props) {
  return (
    <h3 className="quizItem--question">{props.question}</h3>
  )
}

export default QuizQuestion