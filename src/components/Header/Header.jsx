import "./Header.css"


export const Header = ({count}) => {
  return (
    <>
      <h2>
        So you want to be a Software Engineer at a Big Tech Company? Ace your Coding Interview!
      </h2>
      <h4>Lets study Data Structures! {`Number of Cards: ${count}`}</h4>
      </>
  )
}