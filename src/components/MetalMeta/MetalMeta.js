// src/Header.js
import React from 'react'
import data from '../Data/metal.js'


function Header() {
  return (
    <div>
      <h3>Metal Bands 🤘</h3>
      <h4>Bands: {data.length}</h4>
    </div>
    
    
  )
}

export default Header