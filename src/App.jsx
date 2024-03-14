import {useState} from 'react';
import {FlashCard} from "./components/FlashCard/FlashCard.jsx";
import {Button} from "./components/Button/Button.jsx";
import {Header} from "./components/Header/Header.jsx";
import CardData from "./CardData.js";
import './App.css';
import {GuessSection} from "./components/GuessSection/GuessSection.jsx";
import {SubmitButton} from "./components/SubmitButton/SubmitButton.jsx";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [submitted, setSubmitted] = useState(false)
  const [flipped, setFlipped] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    setIsValid(inputValue === CardData[currentIndex].back)
    if(inputValue.toLowerCase() === CardData[currentIndex].back.toLowerCase()) {
      setFlipped(true)
    } else {
      setFlipped(false)
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      handleSubmit(e)
    }
  }

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 ) % CardData.length)
    setFlipped(false)
  }

  const shuffleDeck = () => {
    const shuffledDeck = [...CardData]
    let currentIndex = shuffledDeck.length-1
    let randomIndex

    while(currentIndex >= 0){
      randomIndex = Math.floor(Math.random() * (currentIndex + 1))
      currentIndex--

      [shuffledDeck[currentIndex],shuffledDeck[randomIndex]] = [shuffledDeck[randomIndex],shuffledDeck[currentIndex]]
    }

    setCurrentIndex(0)
    setFlipped(false)
    setSubmitted(false)
    setInputValue('')
    setIsValid(false)
    return shuffledDeck
  }

  // create a prev function that will iterate through an array of objects
  // the logic is an anonymous function, given the index var
  // subtract 1 and then mod CardData.length
  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CardData.length) % CardData.length)
    setFlipped(false)
  }

  return (
      <div className="wrapper">
        <section className="header">
          <Header currentIndex={currentIndex + 1} count={CardData.length}/>
        </section>
        <section className="flashcardContainer">
          <FlashCard submitted={submitted} flipped={flipped} front={CardData[currentIndex].front} back={CardData[currentIndex].back} difficulty={CardData[currentIndex].difficulty} image={CardData[currentIndex].image}/>
        </section>
        <section className="arrowContainer">
          <Button prev={prevCard} next={nextCard}/>
          <button onClick={()=> shuffleDeck(CardData)}>Shuffle</button>
        </section>
        <section className="guessArea">
          <GuessSection value={inputValue}  onChange={handleChange} placeholder={''} className={isValid ? 'valid' : 'invalid'} onKeyDown={handleKeyDown}/>
          <SubmitButton  onSubmit={handleSubmit} disable={flipped}/>
        </section>
      </div>
  )
}

export default App
