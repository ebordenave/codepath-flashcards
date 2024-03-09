import React, {useState} from 'react';
import {FlashCard} from "./components/FlashCard/FlashCard.jsx";
import {ArrowButtons} from "./components/ArrowButtons/ArrowButtons.jsx";
import {Header} from "./components/Header/Header.jsx";
import CardData from "./CardData.js";
import './App.css';
import cardData from "./CardData.js";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // create a next function that will iterate through an array of objects
  // the logic is an anonymous functions, given the index var
  // add 1 and then mod CardData.length
  const nextCard = () => {
    let randomIndex = Math.floor(Math.random() * CardData.length)
    while (randomIndex === currentIndex){
      randomIndex = Math.floor(Math.random() * CardData.length)
    }
    setCurrentIndex(randomIndex)
  }

  // create a prev function that will iterate through an array of objects
  // the logic is an anonymous function, given the index var
  // subtract 1 and then mod CardData.length
  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CardData.length) % CardData.length)
  }

  return (
      <div className="wrapper">
        <section className="header">
          <Header count={CardData.length}/>
        </section>
        <section className="flashcardContainer">
          {/* {CardData[currentIndex].difficulty === "easy" ? console.log(true) : console.log(false)} */}
          <FlashCard front={CardData[currentIndex].front} back={CardData[currentIndex].back} difficulty={cardData[currentIndex].difficulty} image={CardData[currentIndex].image}/>
        </section>
        <section className="arrowContainer">
          <ArrowButtons prev={prevCard} next={nextCard}/>
        </section>
      </div>
  )
}

export default App
