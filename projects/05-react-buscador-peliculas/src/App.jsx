import { useState, useCallback } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'
import './App.css'


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies= useCallback(
    debounce(search => {
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
