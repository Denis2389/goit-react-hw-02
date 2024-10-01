const Options = ({ onGood, onNeutral, onBad, onReset, total }) => {
    return (
        <div>
            <button onClick={onGood}>Good</button>
            <button onClick={onNeutral}>Neutral</button>
            <button onClick={onBad}>Bad</button>
            {total > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    )
}

export default Options