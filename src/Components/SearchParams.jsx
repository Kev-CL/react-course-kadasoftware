import { useState } from 'react';
const ANIMALS = ['bird','cat','dog','rabbit','reptile'];

export const searchParams = () => {
  const[location, setlocation]=useState('')
  return (
    <div>
      <from>
        <label htmlFor='location'>
          Location
          <input
            id='location'value={location} placeholder='Location' onChange={}/>
        </label>
        <label htmlFor='animal'>
          ANIMAL
          <input
            id='animal'value={animal} placeholder='ANIMAL' onChange={}/>
        </label>
  )
}
