// src/Project.js

import React from 'react'
import './Band.css';
// import { Link } from 'react-router-dom'

function Band(props) {
    const { band_name, formed, origin, fans} = props

    return (
      
        <div class="col-sm-4">
          <div class="card mb-0  p-0">
            <div class="card-body">
                <h2 class="band-title m-5">{band_name}</h2>
                
                <div class="row">
                  <p><bold>Origin:</bold> {origin}</p>
                  <p><bold>Formed:</bold>{formed}</p>
                </div>

                <div class="row text-center">
                  <p> <bold>{fans}</bold></p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Band