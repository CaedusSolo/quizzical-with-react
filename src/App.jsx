import "./App.css";
import StartPage from "./components/StartPage";
import React, { useState, createContext, useEffect } from "react";
import QuizPage from "./components/QuizPage";
import he from "he";
import { nanoid } from "nanoid"
// {response_code: 0, results: Array(5)}
// [{}, {}, {}, {}, {}]
// {'category', 'type', 'difficulty', 'question', 'correct_answer', 'incorrect_answers' : []}

export const AppContext = createContext();

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  let quizContent;

  // const quizContent = [
  //   {
  //     "question" : "What team is LeBron James playing for?",
  //     "correct_answer" : "LA Lakers",
  //     'incorrect_answers' : [
  //       "Cleveland Cavaliers",
  //       "Miami Heat",
  //       'Chicago Bulls'
  //     ]
  //   },
  //   {
  //     "question" : "What team is LeBron James playing for?",
  //     "correct_answer" : "LA Lakers",
  //     'incorrect_answers' : [
  //       "Cleveland Cavaliers",
  //       "Miami Heat",
  //       'Chicago Bulls'
  //     ]
  //   },
  //   {
  //     "question" : "What team is LeBron James playing for?",
  //     "correct_answer" : "LA Lakers",
  //     'incorrect_answers' : [
  //       "Cleveland Cavaliers",
  //       "Miami Heat",
  //       'Chicago Bulls'
  //     ]
  //   }
  // ]

  async function fetchQuestions() {
    let sessionToken;

    try {
      const tokenResponse = await fetch(
        "https://opentdb.com/api_token.php?command=request"
      );
      const tokenData = await tokenResponse.json();
      sessionToken = tokenData.token;

      const questionsResponse = await fetch(
        `https://opentdb.com/api.php?amount=5&token=${sessionToken}`
      );
      const questionsData = await questionsResponse.json();

      const decodedQuizContent = questionsData.results.map((result) => {
        return {
          question: he.decode(result.question),
          correct_answer: he.decode(result.correct_answer),
          incorrect_answers: result.incorrect_answers.map((item) => {
            return he.decode(item);
          }),
          id: nanoid()
        };
      });

      // Set the decoded quiz data
      setQuizData(decodedQuizContent);
    } catch (error) {
      console.error("Failed to fetch quiz questions", error);
    }
  }

  useEffect(() => {
    if (quizStarted) {
      fetchQuestions();
    }
  }, [quizStarted]);

  function onStartBtnClick() {
    setQuizStarted((prevState) => !prevState);
  }

  return (
    <>
      <AppContext.Provider
        value={{
          onStartBtnClick,
          quizData,
        }}
      >
        {quizStarted ? <QuizPage /> : <StartPage />}
      </AppContext.Provider>
    </>
  );
}

export default App;
