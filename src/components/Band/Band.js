// src/Project.js

import React from 'react'
import './Band.css';
// import { Link } from 'react-router-dom'

function Band(props) {
    const { band_name, formed, origin, fans} = props

    return (
      <div className="Band">
        <div className="Band-info">
              <div >{band_name}</div>
                <div >{formed}</div>
                <div>{origin}</div>
                <div>{fans}</div>
        </div>
      </div>
    )
}

export default Band