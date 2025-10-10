import React from 'react'
import { useParams } from 'react-router-dom'

const Contact_Us = () => {
  const params = useParams();
  console.log(params);
  return (
   <>
    <h1>Contact Us</h1>
   </>
  )
}

export default Contact_Us
