import React from 'react'

function QuizItem(props) {
  return (
    <div className='quizItem'>
        <h1>{props.question}</h1>
        <h4>{props.options}</h4>
    </div>
  )
}

export default QuizItem