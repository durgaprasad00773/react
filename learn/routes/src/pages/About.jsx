import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='flex justify-between'>
            <h1>
                This is About Page
            </h1>
            <button onClick={() => {navigate("/")}} className='bg-amber-500 text-white px-3 py-1 rounded active:scale-95'>
                back
            </button>
        </div>
    </div>
  )
}

export default About