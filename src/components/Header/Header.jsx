import "./Header.css"


export const Header = ({currentIndex, count}) => {
  return (
    <>
      <h2>
        So you want to be a Software Engineer at a Big Tech Company? Ace your Coding Interview!
      </h2>
      <h4>Lets study Data Structures! {`Current Card ${currentIndex} of ${count}`}</h4>
      </>
  )
}