// import { useState } from 'react'
import {FlashCard} from "./assets/components/FlashCard/FlashCard.jsx";
import CardData from "./CardData.js";

import './App.css'
import {ArrowButtons} from "./assets/components/ArrowButtons/ArrowButtons.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <section className="header">
          <h2>
            So you want to be a Software Engineer at Google? Ace your Coding Interview, Right Now!
          </h2>
          <p>How well do you know Data Structures and Algorithms? Test your might!</p>
        </section>
        <section className="flashcardContainer">
          {CardData.map((card, index) => (
            <FlashCard key={index} front={card.front} back={card.back} />
          ))}
        </section>
        <section className="arrowContainer"><ArrowButtons /></section>
      </div>
    </>
  )
}

export default App
