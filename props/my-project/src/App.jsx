import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {

  let song1 = {
    image: "https://imgs.search.brave.com/Axp66LzYONutIUX5VvynnOPXl-w44Tk6hk0jZ2EcN6g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzL2M1/LzgzLzQzYzU4MzNl/OTQ1MTQxYTYwNzI3/Yjg5MGZiM2EwOGM0/LmpwZw",
    title: "Toxic",
    artist: "Yash"
  }
  let song2 = {
    image: "https://imgs.search.brave.com/aL3JsvP9tGC_5xH6LeoI3Nfr-XPyxiJ0qpmuuzWfM-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTA3/MzExOTkuanBn",
    title: "hello",
    artist: "Anirudh ravichander"
  }

  return (
    <>
      <h1 className="bg-blue-600 text-white p-5 rounded-xl text-3xl">
        Hello world!
      </h1>

      <br />

      <Card 
          image={song1.image}
          title={song1.title}
          artist={song1.artist}
      />
      <Card 
          image={song2.image}
          title={song2.title}
          artist={song2.artist}
      />  

    </>
  )
}

export default App
