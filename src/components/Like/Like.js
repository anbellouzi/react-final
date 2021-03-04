// src/Project.js

import React, { useState } from 'react'
import './Like.css';
// import { Link } from 'react-router-dom'

function Like(props) {
    const {key} = props
    const [ setQuery ] = useState('')

    return (
      
        <div class="row w-50 m-auto">
            <button id={key}
                    class="btn mr-3"
                    onClick={(e) => setQuery(e.target.id)}
            >
            <i class="fa fa-thumbs-up"></i>
          </button>

          <input class="w-25 text-center border" id={key} value={0} />
          
            <button 
                id={key}
                class="btn ml-3"
                onClick={(e) => setQuery(e.target.id)}
            >
                <i class="fa fa-thumbs-down"></i>
          </button>
        </div>
    )
}

export default Like