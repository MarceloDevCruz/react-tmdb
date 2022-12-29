import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG;

const Card = ({ movie, showLink = true }) => {
  return (
    <>
      <div className="card__container">
        <img src={imageURL + movie.poster_path}
          alt={movie.title} className="card__image mg-bottom-sm" />
        <h3 className="card__title">{movie.title}</h3>
        <div className="card__details">
          <p className="card__vote-avarage mg-bottom-sm">
            <FaStar /> {movie.vote_average}
          </p>

          <div className="btn btn__inline">
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card