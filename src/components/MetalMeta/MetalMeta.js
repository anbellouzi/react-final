// src/POPOSList.js

import React, { useState } from 'react';
import './MetalMeta.css';
import Band from '../Band/Band';
import data from '../Data/metal.js'


function MetalMeta() {

  const bands = data.map((obj) => {
        return (
          <Band
            id={obj.id}
            key={`${obj.band_name}-${obj.id}`}
            band_name={obj.band_name}
            formed={obj.formed}
            origin={obj.origin}
            fans={obj.fans}
          />
        )
    })

  return (
    <div className="Band-list">
      {bands}
    </div>
  )
  
}

export default MetalMeta