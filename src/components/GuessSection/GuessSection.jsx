import "./GuessSection.css"
import {Button} from "../Button/Button.jsx";
// import ""

export const GuessSection = () => {
  return (
    <div className="GuessSection">
      <h3>Guess the answer here: <form>
        <input type="text"/>
        <br/>
        <input className="submitButton" type="submit" value="submit"/>

      </form></h3>
    </div>
  )
}