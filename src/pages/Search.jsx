import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import Card from '../components/Card'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  const getSearchMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchMovies(searchWithQueryURL)
  }, [query])

  return (
    <div className="search">
      <h2 className="search__title">Resultados para: {query}</h2>
      <div className="card">
        {movies.length > 0 && movies.map((movie) =>
          <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search