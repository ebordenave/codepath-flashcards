export const SubmitButton = (props) => {
  return (
    <>
    <button onClick={props.onSubmit} disabled={props.disabled}>
      Submit Guess
    </button></>
  )
}

export default SubmitButton