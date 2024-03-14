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

  const [cardData, setCardData] = useState(CardData);




  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    setIsValid(inputValue === cardData[currentIndex].back)
    if(inputValue.toLowerCase() === cardData[currentIndex].back.toLowerCase()) {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1 ) % cardData.length)
    setFlipped(false)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length)
    setFlipped(false)
  }

  const shuffleDeck = () => {
    let shuffledDeck = [...cardData];
    let currentIndex = shuffledDeck.length - 1;
    let randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [shuffledDeck[currentIndex], shuffledDeck[randomIndex]] = [shuffledDeck[randomIndex], shuffledDeck[currentIndex]];
      currentIndex--;
    }
    setCardData(shuffledDeck);
  };

  return (
      <div className="wrapper">
        <section className="header">
          <Header currentIndex={currentIndex + 1} count={cardData.length}/>
        </section>
        <section className="flashcardContainer">
          <FlashCard submitted={submitted} flipped={flipped} front={cardData[currentIndex].front} back={cardData[currentIndex].back} difficulty={cardData[currentIndex].difficulty} image={cardData[currentIndex].image}/>
        </section>
        <section className="arrowContainer">
          <Button prev={prevCard} next={nextCard}/>
          <button onClick={shuffleDeck}>Shuffle</button>
        </section>
        <section className="guessArea">
        <GuessSection value={inputValue} onChange={handleChange} placeholder={''} className={isValid ? 'valid' : 'invalid'} onKeyDown={handleKeyDown} style={isValid ? { border: '1px solid green' } : { border: '1px solid red' }} />
          <SubmitButton  onSubmit={handleSubmit} disable={flipped}/>
        </section>
      </div>
  )
}

export default App
