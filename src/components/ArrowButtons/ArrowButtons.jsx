import "./ArrowButtons.css"

export const ArrowButtons = ({prev, next}) => {
  return (
    <>
      <button onClick={prev}>&#8592;</button>
      <button onClick={next}>&#8594;</button>
    </>
  )
}