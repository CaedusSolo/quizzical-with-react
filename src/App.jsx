import "./App.css";
import StartPage from "./components/StartPage";
import React, { useState, createContext } from "react";
import QuizPage from "./components/QuizPage";
import he from "he"

export const AppContext = createContext();


function App() {
  const [quizStarted, setQuizStarted] = useState(false);


  function onStartBtnClick() {
    setQuizStarted((prevState) => !prevState);
  }



  return (
    <>
      <AppContext.Provider
        value={{
          onStartBtnClick,
        }}
      >
        <QuizPage />
      </AppContext.Provider>
    </>
  );
}

export default App;