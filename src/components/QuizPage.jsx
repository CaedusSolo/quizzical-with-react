import React, {useContext} from 'react'
import { AppContext } from '../App'
import QuizItem from './QuizItem'

function QuizPage() {

  const {quizData} = useContext(AppContext)

  //  shuffle answer options array
  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }

  
  function mapQuizData() {
    return quizData.map(item => {
      const options = shuffleArr([item.correct_answer, ...item.incorrect_answers])
      return <QuizItem 
      question={item.question}
      answer={item.correct_answer}
      options={options}
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