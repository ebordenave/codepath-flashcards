import "./GuessSection.css"

export const GuessSection = ({value,onChange,placeholder,className, onKeyDown, style}) => {
  return (
    <div className="GuessSection">
      <h3>Guess the answer here: <form>
        <input type="text" style={style} onKeyDown={onKeyDown} value={value} onChange={onChange} placeholder={placeholder} className={className}/>
      </form></h3>
    </div>
  )
}