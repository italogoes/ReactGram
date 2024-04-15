import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='nav'>
        <Link to="/">ReactGram</Link>
        <form>
            <input type='text'/>
        </form>
        <ul id='nav-links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Cadastrar</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar