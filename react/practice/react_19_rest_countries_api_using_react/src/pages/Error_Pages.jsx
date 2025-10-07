import React from 'react'
import { useRouteError } from 'react-router-dom'

const Pages = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
        <img src='/assets/404-error.jpg' alt='404 error' style={{width: '100%', height: '100vh'}} />
    </>
  )
}

export default Pages
