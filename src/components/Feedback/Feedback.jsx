const Feedback = ({ good, neutral, bad, total, totalFeedback }) => {
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
