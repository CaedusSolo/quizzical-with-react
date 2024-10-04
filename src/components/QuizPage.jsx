import React, {useContext} from 'react'
import { AppContext } from '../App'
import QuizItem from './QuizItem'

function QuizPage() {

  const {quizData, selectedOptions, checkUserAnswers} = useContext(AppContext)

  function handleClick() {
    checkUserAnswers()
  }

  function mapQuizData() {
    return quizData.map(item => {
      return <QuizItem 
      question={item.question}
      answer={item.correct_answer}
      options={item.options}
      id={item.id}
      />
    })
  }

  return (
    <div className='quizPage'>
      {mapQuizData()}
      <button className={quizData.length !== selectedOptions.length ? "check-btn disabled" : 'check-btn active'} 
      onClick={handleClick}
      disabled={quizData.length !== selectedOptions.length}
      >Check Answers</button>
    </div>
  )
}

export default QuizPage