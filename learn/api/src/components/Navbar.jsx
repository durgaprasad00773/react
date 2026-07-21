import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <p>{props.theme}</p>
        <button onClick={() => props.setTheme('light')}>Change Theme</button>
    </div>
  )
}

export default Navbar