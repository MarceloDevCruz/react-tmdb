import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

import './Card.css'

const imageURL = import.meta.env.VITE_IMG;


const Card = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div >
  )
}

export default Card