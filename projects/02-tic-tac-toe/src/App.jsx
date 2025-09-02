import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}



export default function App() {
  // const board = Array(9).fill(null)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  console.log(board)

  const Square = ({ children, isSelected, updateBoard, indice }) => {
    const className = `square ${isSelected ? 'is-selected' : '' }`


    return (
      <div className={className}>
        { children }
      </div>
    )
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
                key= { index }
                indice = { index }
                >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected = { turn === TURNS.X }>{TURNS.X}</Square>
        <Square isSelected = { turn === TURNS.O }>{TURNS.O}</Square>
      </section>
    </main>
    
  )
}

