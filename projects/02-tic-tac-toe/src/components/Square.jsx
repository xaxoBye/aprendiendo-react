export const Square = ({ children, isSelected, updateBoard, indice }) => {
  const className = `square ${isSelected ? 'is-selected' : '' }`
  const handleClick = () => {
    updateBoard(indice)
  }
  return (
    <div onClick={handleClick} className={className}>
      { children }
    </div>
  )
}