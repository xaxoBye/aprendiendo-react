import { useState, useEffect, useRef, useCallback } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'
import './App.css'

function useSearch() {
  const [search, updateSearch,] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(()=>{
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === ''){
      setError('Rellena campo para buscar película')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  },[search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies= useCallback(
    debounce(search => {
      console.log('search ', search)
      getMovies({ search })
    }, 400)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search  })
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log('valor de los inputs: ', fields)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch) 
    debouncedGetMovies( newSearch )
  }

  return (
    <div className='page'> 
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='tituloPelicula' placeholder='Avengers, Start Wars, The Matrix...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>  
        {error && <p style={{ color: 'red' }}>{error}</p>}       
      </header>   

      <main>
        {
          loading ? <p>Cargando ... </p> : <Movies movies={ movies }/>
        }
        
      </main>

    </div>
  )
}

export default App
