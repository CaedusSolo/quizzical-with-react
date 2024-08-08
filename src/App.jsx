import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./Question";
import StartPage from "./StartPage";


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

// quizQuestions:  ['Which issue of the &quot;Sonic the Hedgehog&quot; …d Scourge the Hedgehog make his first appearance?', 'Madonna&#039;s song &quot;Hung Up&quot; includes a piece from which popular 70s song?', 'What is the name of Cream the Rabbit&#039;s mom in the &quot;Sonic the Hedgehog&quot; series?', 'What is Brian May&#039;s guitar called?', 'When was the Grand Patriotic War in the USSR concluded?', 'In 1845, a series of wars named after which indigenous people began in New Zealand?', '&quot;Typewriter&quot; is the longest word that ca…ed using only the first row on a QWERTY keyboard.', 'The F1 season of 1994 is remembered for what tragic event?', 'What is the capital of Senegal?', 'In the &quot;Call Of Duty: Zombies&quot; map &quot…t;, how many numbered power generators are there?']
// [ {question: ..., answerOptions: [], correctAnswer: ..., incorrectAnswers: [], userAnswer: ..., isSelected: false  } ]


function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizItems, setQuizItems] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswerOptions, setQuizAnswerOptions] = useState([]);

  function toggleQuizStarted() {
    setQuizStarted((prevState) => !prevState);
  }

  function getQuestions() {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=medium")
      .then((res) => res.json())
      .then((data) => {
        const formattedResults = data.results.map((result) => {
          return {
            question: result.question,
            answerOptions: [...result.incorrect_answers, result.correct_answer],
            correctAnswer: result.correct_answer,
            userAnswer: null,
            isSelected: false,
          };
        });
        console.log(formattedResults)
        setQuizItems(formattedResults);
      });
  }

  useEffect(() => getQuestions(), []);

  return (
    <main className="main--container">
      {quizStarted ? 
      quizItems.map(item => {
        return <Question questionText={item.question} answerOptions={item.answerOptions} />
      })
      : (
        <StartPage toggleQuizStarted={toggleQuizStarted} />
      )}
    </main>
  );
}

export default App;