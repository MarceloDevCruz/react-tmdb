import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './Header.css'

const Header = () => {

  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <div>
      <nav className="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> MoviesLib</Link>
        </h2>
        {/* <Link to="/movie/id:">Movie</Link>
        <Link to="/search">Search</Link> */}

        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='busque um filme'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit"> <BiSearchAlt2 /> </button>
        </form>

      </nav>
    </div>
  )
}

export default Header