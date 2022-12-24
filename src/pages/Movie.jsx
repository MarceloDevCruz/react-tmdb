import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp, BsWallet2, BsHourglassSplit,
  BsFillFileEarmarkRichtextFill
} from 'react-icons/bs'

import Card from '../components/Card'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

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
    <div className="movie-page">
    </div>
  )
}

export default Movie