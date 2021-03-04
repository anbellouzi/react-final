// src/Project.js

import React from 'react'
import './Band.css';
import Like from '../Like/Like'
// import { Link } from 'react-router-dom'

function Split(props) {
  const split = props.split;

  if (split == "-") {
    return <Like />
  }
  else {
    return <br></br>
  }
}


function Band(props) {
    const { band_name, formed, origin, fans, split, style} = props
    
    
    return (
      
        <div class="col-sm-4">
          <div class="card mb-0  p-0">
            <div class="card-body">
                <h2 class="band-title m-5">{band_name}</h2>
                
                <div class="row">
                    
                    <strong>Origin:</strong> <p> {origin} </p>
                    
                    <p>
                      <strong>Fans:</strong>{(fans*1000).toLocaleString('en')}
                    </p>
                    <p>
                      <strong>Formed:</strong>{formed} 
                    </p>
                    <p>
                      <strong>Split:</strong>{split} 
                    </p>
                </div>
              <div class="row text-left w-100">
                <p class="">{style}</p>
                <div class="row text-left w-100">
                  <ul>
                  {style.split(',').map((value, i) => {
                    return <li key={i}>{value}</li>
                  })}
                  </ul>
                </div>
              </div>
              <div class="row text-center mt-3">
                <Split split={split} />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Band