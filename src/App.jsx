import { useState, useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'




function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const {movies, loading, getMovies} = useMovies({search, sort})

  


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }
  
  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    
    updateSearch(newSearch)
    getMovies( { seach: newSearch})

  }

   


  return (
    <div className='page'>
      <header>
        <h1>Mateo Matias Buscador de Películas con React</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
          <input  style={{border: '1px solid transparent', borderColor: error? 'red' : 'transparent'}}   onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, StarWars' />
          <input type="checkbox"  onChange={handleSort} checked={sort} />
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading? <p>Cargando ...</p> : <Movies movies={movies}/>
        }
        
      </main>
      
    </div>
  )
}

export default App
