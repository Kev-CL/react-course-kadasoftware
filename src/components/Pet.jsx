// Dependencies
import React from 'react';

export const Pet = ({ images, location, id, name, animal, breed }) => {
  if(images.length){
    
  }
  
  return(
    <div>
    <h1>{name}</h1>
    <h2>{animal}</h2>
    <h2>{breed}</h2>
  </div>
  );
 
  };
