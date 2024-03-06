import "./Header.css"


export const Header = ({count}) => {
  return (
    <>
      <h2>
        So you want to be a Software Engineer at Google? Ace your Coding Interview, Right Now!
      </h2>
      <p>{`Number of Cards: ${count}`}</p>
      </>
  )
}