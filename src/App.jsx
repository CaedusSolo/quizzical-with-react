import "./App.css";
import StartPage from "./components/StartPage";
import React, { useState, createContext, useEffect } from "react";
import QuizPage from "./components/QuizPage";
import he from "he";
import { nanoid } from "nanoid";


export const AppContext = createContext();

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [quizResults, setQuizResults] = useState(null)
  

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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
        const decodedCorrectAnswer = he.decode(result.correct_answer)
        const decodedIncorrectAnswers  = result.incorrect_answers.map((item) => {
          return he.decode(item);
        });

        return {
          question: he.decode(result.question),
          correct_answer: decodedCorrectAnswer,
          incorrect_answers: decodedIncorrectAnswers,
          id: nanoid(),
          options: shuffleArr([
            decodedCorrectAnswer,
            ...decodedIncorrectAnswers
          ]),
        };
      });

      // Set the decoded quiz data
      setQuizData(decodedQuizContent);
    } catch (error) {
      console.error("Failed to fetch quiz questions", error);
    }
  }

  function onStartBtnClick() {
    setQuizStarted((prevState) => !prevState);
  }

  function updateSelectedOptions(questionId, optionIndex) {
    setSelectedOptions((prevState) => {
      
      // Check if the question is already in the selected options
      const existingSelectionIndex = prevState.findIndex(
        (option) => option.questionId === questionId
      );

      // If the question is already selected, update the selected option
      if (existingSelectionIndex !== -1) {
        const updatedOptions = [...prevState];
        updatedOptions[existingSelectionIndex] = {
          questionId: questionId,
          selectedOptionIndex: optionIndex
        };
        return updatedOptions;
      }

      return [
        ...prevState,
        { questionId: questionId, selectedOptionIndex: optionIndex },
      ];
    });
  }

  function checkUserAnswers() {
    const results = selectedOptions.map((selectedOption) => {
      const question = quizData.find(question => question.id === selectedOption.questionId)
      const isCorrect = question.options[selectedOption.selectedOptionIndex] === question.correct_answer
      const selectedOptionIndex = selectedOption.optionIndex

      return {
        questionId: selectedOption.questionId, 
        selectedOptionIndex: selectedOptionIndex,
        isCorrect: isCorrect,
        correctAnswer: question.correct_answer
      }
    })
    setQuizResults(results)
  }


  // fetch questions at start of quiz
  useEffect(() => {
    if (quizStarted) {
      fetchQuestions();
    }
  }, [quizStarted]);

  useEffect(() => {
    if (quizData.length > 0) {

    }
  })

  return (
    <>
      <AppContext.Provider
        value={{
          onStartBtnClick,
          quizData,
          updateSelectedOptions,
          selectedOptions,
          quizResults,
          checkUserAnswers
        }}
      >
        {quizStarted ? <QuizPage /> : <StartPage />}
      </AppContext.Provider>
    </>
  );
}

export default App;

//  HOW DATA IS RETURNED FROM API
// const quizContent = [
//   {
//     "question" : "What team is LeBron James playing for?",
//     "correct_answer" : "LA Lakers",
//     'incorrect_answers' : [
//       "Cleveland Cavaliers",
//       "Miami Heat",
//       'Chicago Bulls'
//     ] {questionId: 0, selectedOptionIndex: 2}
//   },
// ]