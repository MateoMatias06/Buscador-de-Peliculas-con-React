import { useState, useEffect, useRef } from "react"
export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError ] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(()=>{
      if (isFirstInput.current){
        isFirstInput.current = search === ''
        return
      }
      if (search === '') {
        setError('No se puede buscar una pelicula vacia') 
        return
      }
      if (search.match(/^\d+$/)){
        setError('No se puede buscar una pelicula con un numero')
        return
      }
      if ( search.length < 3) {
        setError('La busqueda no puede ser menor que tres')
        return
      }
      setError(null)
    }, [search]) 
    return { search, updateSearch, error}
  }