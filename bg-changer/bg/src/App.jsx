import { useState } from 'react'
import Button from './components/button'
import './index.css'

function App() {
  const [color, setColor] = useState();
  return (
      <div className="h-screen flex justify-center items-center bg-black" style=  {{backgroundColor: color}}>
        <div className = "bg-gray-300 p-3 rounded-xl flex gap-4">
          <Button text="Red" setColor={setColor} />
          <Button text="Green" setColor={setColor} />
          <Button text="Blue" setColor={setColor} />
          <Button text="Yellow" setColor={setColor} />
          <Button text="Purple" setColor={setColor} />
          <Button text="Pink" setColor={setColor} />
        </div>
    </div>
  )
}

export default App
