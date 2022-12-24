import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

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
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <BiCameraMovie />
        </div>
        <h1 className="header__title">
          Maximus Film
        </h1>
      </div>
      <form action="" className="header__search-container">
        <input type="search" placeholder="Search films"
          className="header__search-input" />
        <button className="header__search-button">
          <div className="header__search-icon">
            <BiSearchAlt2 />
          </div>
        </button>
      </form>
    </header>
  )
}

export default Header