export const SubmitButton = ({onSubmit, disabled}) => {
  return (
    <>
    <button onClick={onSubmit} disabled={disabled}>
      Submit Guess
    </button></>
  )
}

export default SubmitButton
