const Feedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const totalFeedback = Math.round((good / total) * 100);
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {totalFeedback}%</p>
        </div>
    )
}

export default Feedback;
