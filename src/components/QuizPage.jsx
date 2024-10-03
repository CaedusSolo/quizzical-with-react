import React, {useContext} from 'react'
import { AppContext } from '../App'
import QuizItem from './QuizItem'

function QuizPage() {

  const {quizData, selectedOptions} = useContext(AppContext)


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
      <button className='check-btn'>Check Answers</button>
    </div>
  )
}

export default QuizPage