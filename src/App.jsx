import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from "./Question"
import StartPage from "./StartPage"


// https://opentdb.com/api.php?amount=10&difficulty=medium
//  [{}, {}, {}]
// 
// {
//    category: "Geography"
//    correct_answer : "Prince Edward Island"
//    difficulty : "medium"
//    incorrect_answers : ["Saskachewan", "Northwest Terrirories", "Ontario"]
//    question: "Which Canadian province has Charlottetown as its capital?"
//    type : "multiple" 
// }

  // useEffect(() => {
  //   fetch("https://opentdb.com/api.php?amount=10&difficulty=medium")
  //   .then(res => res.json())
  //   .then(data => console.log(data.results))
  // },[])


function App() {
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizItems, setQuizItems] = useState([])
  const [quizQuestions, setQuizQuestions] = useState([])
  const [answerOptions, setAnswerOptions] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState([])


  function toggleQuizStarted() {
    setQuizStarted(prevState => !prevState)
  }

  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=medium")
    .then(res => res.json())
    .then(data => {
      const dataArr = data.results
      setQuizItems(dataArr)
    })
  }, [])


  return (
    <main className='main--container'>
      {quizStarted ? 
      <Question questionText="Which is the correct Chinese character for 'he'?" /> :
      <StartPage toggleQuizStarted={toggleQuizStarted} />}
    
    </main>
  )
}

export default App