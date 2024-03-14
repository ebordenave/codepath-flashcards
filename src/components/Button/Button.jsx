import "./Button.css"

export const Button = ({character, prev, next}) => {
  return (
    <>
      <button onClick={prev}>&#8592;</button>
      <button onClick={next}>&#8594;</button>
    </>
  )
}