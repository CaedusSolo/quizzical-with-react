import "./App.css";
import StartPage from "./components/StartPage";
import React, { useState, createContext, useEffect } from "react";
import QuizPage from "./components/QuizPage";
import he from "he"
// {response_code: 0, results: Array(5)}
// [{}, {}, {}, {}, {}]
// {'category', 'type', 'difficulty', 'question', 'correct_answer', 'incorrect_answers' : []}


export const AppContext = createContext();
//  api url: https://opentdb.com/api.php?amount=5&token=eed9b9209d969b9aeef2d44806f704049d97d88be10a969b8a5f9a14cbcff479



function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState([])

  const quizContent = [
    {
      "question" : "What team is LeBron James playing for?",
      "correct_answer" : "LA Lakers",
      'incorrect_answers' : [
        "Cleveland Cavaliers",
        "Miami Heat",
        'Chicago Bulls'
      ]
    },
    {
      "question" : "What team is LeBron James playing for?",
      "correct_answer" : "LA Lakers",
      'incorrect_answers' : [
        "Cleveland Cavaliers",
        "Miami Heat",
        'Chicago Bulls'
      ]
    },
    {
      "question" : "What team is LeBron James playing for?",
      "correct_answer" : "LA Lakers",
      'incorrect_answers' : [
        "Cleveland Cavaliers",
        "Miami Heat",
        'Chicago Bulls'
      ]
    }
  ]

  useEffect(() => {
    setQuizData(quizContent)
  },[quizStarted])


  function onStartBtnClick() {
    setQuizStarted((prevState) => !prevState);
  }


  return (
    <>
      <AppContext.Provider
        value={{
          onStartBtnClick,
          quizData
        }}
      >
        <QuizPage />
      </AppContext.Provider>
    </>
  );
}

export default App;