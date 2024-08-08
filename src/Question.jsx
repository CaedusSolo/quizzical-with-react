import './App.css' 

export default function Question(props) {
    return (
        <section className="questions--container">
        <div className="question--container">
            <h2 className="quiz-question">
            {props.questionText}
            </h2>
            <div className="quiz-answers--container">
                <button className="answer--btn">我</button>
                <button className="answer--btn">瓦</button>
                <button className="answer--btn">它</button>
                <button className="answer--btn">他</button>
            </div>
        </div>
    </section>
    )
}