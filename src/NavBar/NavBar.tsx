// src/NavBar/NavBar.tsx

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        NavBar<br />
        <Link to='/cv' relative='path'>go there</Link>
    </div>
  )
}

export default NavBar