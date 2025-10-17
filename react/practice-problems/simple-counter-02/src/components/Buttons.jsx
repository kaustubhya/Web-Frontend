import React from 'react'

const Buttons = ({name, onClick}) => {
  return (
    <button className='button' onClick={onClick}>{name}</button>
    // important to pass the functionality too when sending thr buttons as a component
  )
}

export default Buttons
