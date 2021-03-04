// src/Header.js
import React from 'react'
import data from '../Data/metal.js'

function Header() {
  return (
    <div class="m-5 container text-left">
          <h1>FEW 1.2 Final Assessment</h1>
          <h2>Anas Bellouzi</h2>
          <h2>Total Bands: {data.length}</h2>
    </div>
  )
}

export default Header