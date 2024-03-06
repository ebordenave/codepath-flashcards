// import { useState } from 'react'
import {FlashCard} from "./components/FlashCard/FlashCard.jsx";
import CardData from "./CardData.js";

import './App.css'
import {ArrowButtons} from "./components/ArrowButtons/ArrowButtons.jsx";
import {Header} from "./components/Header/Header.jsx";

function App() {


  return (
    <>
      <div className="wrapper">
        <section className="header">
          <Header count={CardData.length}/>
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
