const Options = ({ onGood, onNeutral, onBad, onReset }) => {
    return (
        <div>
            <button onClick={onGood}>Good</button>
            <button onClick={onNeutral}>Neutral</button>
            <button onClick={onBad}>Bad</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}

export default Options