import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './index.css'
const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  }, [index])


  let printUserData = <div className='h-screen'>
    <h2 className='w-full max-h-full flex justify-center items-center h-[80%]'>loading...</h2>
  </div>

  if(userData.length > 0)
  {
    printUserData = userData.map((elem, idx) => {
        return(
          <div key={idx}>
             <div className='h-40 w-44 rounded-2xl overflow-hidden'>
                <img className='object-cover h-full w-full ' src={elem.download_url} alt="" />
              </div>
             <h1>{elem.author}</h1>
          </div>
        )
    })
  }
  return (
    <div className='bg-black text-white p-4 overflow-auto h-screen'>
        <h1 className='h-10 w-10 rounded-full bg-white text-gray-600 flex justify-center items-center fixed'>{index}</h1>
        <div className='flex flex-wrap gap-10 justify-center m-10'>
          {printUserData}
        </div>

        <div className='flex gap-4 justify-center m-10'>
          <button onClick={() => {if(index>1) {setIndex(index-1)} setUserData([])}} className='active:scale-95 p-3 w-20 text-black bg-amber-500 rounded-2xl'>Prev</button>
          <h2 className='m-3'>Page {index}</h2>
          <button onClick={() => {setUserData([]);setIndex(index+1)}} className='active:scale-95 p-3 w-20 text-black bg-amber-500 rounded-2xl'>Next</button>
        </div>
    </div>
  )
}

export default App