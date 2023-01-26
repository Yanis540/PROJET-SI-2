import React from 'react'
import {Link} from 'react-router-dom'

function RedirectToRegister() {
  return (
    <div className="flex items-center justify-center pt-5">
        <span className='text-center capitalize'>
            dont have an account ? 
            <Link to='/register'>
                Register
            </Link> 
        </span>
    </div>
  )
}

export default RedirectToRegister