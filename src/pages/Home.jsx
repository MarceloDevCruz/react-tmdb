import { useState, useEffect } from 'react'

import Card from '../components/Card'

// Assets
import disney from '../assets/disney.jpg'
import netflix from '../assets/netflix.jpg'
import amazonprime from '../assets/prime-video.jpg'
import user1 from '../assets/user-1.jpg'
import user2 from '../assets/user-2.jpg'
import user3 from '../assets/user-3.jpg'
import user4 from '../assets/user-4.jpg'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data.results)
  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)

  }, [])

  return (
    <>
      <div className="home">
        <div className="home__streamers">
          <img src={disney} alt="disney" className="home__streamers-img" />
          <img src={netflix} alt="netflix" className="home__streamers-img" />
          <img src={amazonprime} alt="amazonprime" className="home__streamers-img" />
        </div>
        <div className="home__streamers-box">
          <h4 className="home__streamers-content">
            Informações dos melhores filmes e séries dos principais streaming
          </h4>

          <div className="home__avaliation">
            <div className="home__avaliation-box">
              <div className="home__profile-content">
                <img src={user1} alt="" className="home__profile-icon" />
                <span className="home__profile-name">Jake Nackos</span>
              </div>
              <p className="home__profile-comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                autem accusantium fugit eaque quas, perferendis ipsam porro
                sapiente maxime, libero nemo quaerat.
              </p>
            </div>

            <div className="home__avaliation-box">
              <div className="home__profile-content">
                <img src={user2} alt="" className="home__profile-icon" />
                <span className="home__profile-name">Joseph Gonzales</span>
              </div>
              <p className="home__profile-comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                autem accusantium fugit eaque quas, perferendis ipsam porro
                sapiente maxime, libero nemo quaerat.
              </p>
            </div>

            <div className="home__avaliation-box">
              <div className="home__profile-content">
                <img src={user3} alt="" className="home__profile-icon" />
                <span className="home__profile-name">Elizeu Dias</span>
              </div>
              <p className="home__profile-comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                autem accusantium fugit eaque quas, perferendis ipsam porro
                sapiente maxime, libero nemo quaerat.
              </p>
            </div>

            <div className="home__avaliation-box">
              <div className="home__profile-content">
                <img src={user4} alt="" className="home__profile-icon" />
                <span className="home__profile-name">Ayo Ogunseinde</span>
              </div>
              <p className="home__profile-comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                autem accusantium fugit eaque quas, perferendis ipsam porro
                sapiente maxime, libero nemo quaerat.
              </p>
            </div>
          </div>

        </div>
        <h2 className="home__title">
          Os 20 melhores filmes
        </h2>

      </div>
      <div className="card">
        {topMovies.length > 0 && topMovies.map((movie) =>
          <Card key={movie.id} movie={movie} />)}
      </div>
    </>
  )
}

export default Home