import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 text-white">
        <h3 className="text-xs font-bold bg-gray-900 rounded-full px-4 py-1 uppercase">
            Target Audience
        </h3>
        <button className="p-10 bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-4xl tracking-widest text-xs">
            Digital Banking platform
        </button>
    </div>
  )
}

export default Navbar