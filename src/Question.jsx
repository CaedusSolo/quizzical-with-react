import "./App.css";

export default function Question(props) {
  return (
    <section className="questions--container">
      <div className="question--container">
        <h2 className="quiz-question">{props.questionText}</h2>
        <div className="quiz-answers--container">
          {props.answerOptions.map((option) => {
            return <button className="answer--btn">{option}</button>;
          })}
        </div>
      </div>
    </section>
  );
}
