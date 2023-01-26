import React from 'react'
import {Link} from 'react-router-dom'

function GoToLoginPage() {
  return (
    <div className="flex items-center justify-center pt-5">
      <span className='text-center capitalize'>
        already have an  account ? 
        <Link to='/'>
          Login
        </Link> 
      </span>
    </div>
  )
}

export default GoToLoginPage