import "./GuessSection.css"

export const GuessSection = ({value,onChange,placeholder,className, onKeyDown}) => {
  return (
    <div className="GuessSection">
      <h3>Guess the answer here: <form>
        <input type="text"  onKeyDown={onKeyDown} value={value} onChange={onChange} placeholder={placeholder} className={className}/>
      </form></h3>
    </div>
  )
}