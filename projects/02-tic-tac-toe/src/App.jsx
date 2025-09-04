import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './components/constants.js'
import { checkWinnerFrom, checkEndGame, resetGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage } from './logic/storage/index.js'
import './App.css'

export default function App() {
  // const board = Array(9).fill(null)
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage)  : Array(9).fill(null)
    })
    
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (indice) => {
    if(board[indice] || winner) return

    const newBoard = [...board]
    newBoard[indice] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
    const newWinner = checkWinnerFrom(newBoard)
    saveGameToStorage({board: newBoard, turn: newTurn})

    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={() => resetGame({ setBoard, setTurn, setWinner })} >Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square 
                key= { index }
                indice = { index }
                updateBoard = { updateBoard }
                >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected = { turn === TURNS.X }>{TURNS.X}</Square>
        <Square isSelected = { turn === TURNS.O }>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={() => {resetGame({ setBoard, setTurn, setWinner })}} winner={winner}/>

    </main>
    
    
  )
}

