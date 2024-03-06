import "./FlashCard.css"
import {useState} from "react";


export const FlashCard = ({front, back}) => {
  // set states here using a const
  const [cardFlip, setCardFlip] = useState(false)

  // declare a function that will handle the state
  // this will later be used by an event listener
  const handleCardFlip = () => {
    setCardFlip(!cardFlip)
  }

  return (
    <>
      {/* provide events on mouseEnter and onMouseLeave here */}
      {/* The conditionally add flipped to the classname based on the mouse
       event being listened to */}
      <div className={`flashCard ${cardFlip ? "flipped": ''} `} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
        {/* front */}
        <div className="front"><h2>{front}</h2></div>
        {/* back */}
        <div className="back"><h2>{back}</h2></div>
      </div>
    </>
  )
}