import "./FlashCard.css"


export const FlashCard = (props) => {

  const getDifficultyColor = (difficulty) => {
    return difficulty === 'easy' ? 'green' : difficulty === 'medium' ? 'yellow' : 'red'
  }

  return (
    <>
      <div className={`flashCard ${props.flipped ? 'flipped': ''} ${getDifficultyColor(props.difficulty)} `}>
        <div className="front"><h2>{props.front}</h2>
          </div>
        <div className="back"><h2>{props.back}</h2></div>
      </div>
    </>
  )
}