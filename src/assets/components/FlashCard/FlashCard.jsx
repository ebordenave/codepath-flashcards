import "./FlashCard.css"


export const FlashCard = ({front, back}) => {
  return (
    <>
      <div className="flashCard">
        <div className="cardFront"><h2>{front}</h2></div>
        <div className="cardBack"><h2>{back}</h2></div>
      </div>
    </>
  )
}
