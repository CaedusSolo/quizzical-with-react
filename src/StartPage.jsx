export default function StartPage(props) {
    return (
        <section className="start--section">
            <h1>Quizzical</h1>
            <h3>Test Your Knowledge</h3>
            <button className="start-btn" onClick={props.toggleQuizStarted} >Start quiz</button>
        </section>
    )
}