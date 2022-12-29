import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {

} from 'react-icons/gr'

import Card from '../components/Card'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  const formatCurrency = (number) => {
    return number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }


  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [])

  return (
    <div className="movie">
      {movie && (
        <>
          <div className="movie__container">
            <img src={imageURL + movie.backdrop_path} alt={movie.title}
              className="movie__image" />
            <h2 className="movie__title">{movie.title}</h2>
            <div className="movie__content ">
              <p className="movie__language bd-bottom-grey">Lingua original: {movie.original_language}</p>
              <p className="movie__original-title bd-bottom-grey">Titulo original: {movie.original_title}</p>
              <div className="movie__homepage bd-bottom-grey">
                <span className="movie__homepage__paragraph">Homepage:</span> <a href={movie.homepage}
                  className="movie__homepage-link">{movie.homepage}</a>
              </div>
              <p className="movie__budget bd-bottom-grey">Orçamento: {formatCurrency(movie.budget)}</p>
              <p className="movie__genres bd-bottom-grey"> Genero: {movie.genres.map((genres, index) => (
                <span key={genres.id}>[{genres.name}] </span>
              ))}</p>
              <p className="movie__popularity bd-bottom-grey">Popularidade: {movie.popularity}</p>
              <p className="movie__runtime bd-bottom-grey">Duração: min:{movie.runtime}</p>
              <p className="movie__revenue bd-bottom-grey">Receita: {formatCurrency(movie.revenue)}</p>
              <p className="movie__tagline bd-bottom-grey">Slogan: {movie.tagline}</p>
              <p className="movie__release bd-bottom-grey">Data de lançamento: {movie.release_date}</p>
              <p className="movie__overview">Resumo: {movie.overview}</p>
            </div>
          </div>
        </>
      )}
    </div >
  )
}

export default Movie