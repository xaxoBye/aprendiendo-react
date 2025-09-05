import  { useEffect, useState } from "react"


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})


  // pointer move
  useEffect(()=>{
    console.log('enabled:', enabled)
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY })
      console.log(`${clientX} : ${clientY}`)
    }

    if(enabled) {
      console.log('limpiado')
      window.addEventListener('pointermove', handleMove) 
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log('Limpiado')
    }
  
  },[enabled])

  // Change body className
  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled)

    return (() => { document.body.classList.remove('no-cursor') })
    
  },[enabled])

  const handClick = () => {
    setEnabled(!enabled)
  }

  return (
    <>
        <div 
          style={
              {
                position: "absolute",
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #09f',
                borderRadius: '50%' ,
                opacity: 0.8,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px`
              }}
        />
        <button onClick={handClick}>{enabled ? 'Desactivar' : 'Activar'} Seguir Puntero</button>
    </>
  )  
}

function App() {
  const [mounted, setMounted] = useState(true)


  return (
    <main>
      {mounted &&  <FollowMouse />  }
      <br />
      <button onClick={() => setMounted(!mounted)}>
        Touggle mounted, FollowMouse component
      </button>
    </main>
  )
}

export default App
