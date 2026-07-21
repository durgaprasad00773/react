import React from 'react'
import { useState } from 'react'
const App = () => {
  const submitHandler = (e) => {
      e.preventDefault()

      const temp = [...task]
      temp.push({title, desc})
      
      console.log(temp)
      setTask(temp);

      setTitle('');
      setDesc('');
  }

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [task, setTask] = useState([])
  return (
    <div>
        <div className="flex justify-between w-screen px-30">
          <form className="flex flex-col gap-4 p-10 w-100" onSubmit = {submitHandler}>
            <input className="border border-gray-900 rounded py-2 px-4" type="text" placeholder="Enter title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <textarea placeholder='Description' className='border border-gray-900 rounded py-2 px-4 h-30 resize-none' value={desc} onChange={(e) => {setDesc(e.target.value)}}>
            </textarea>
            <button className="bg-black text-white py-2 px-4 rounded active:scale-96">Add Note</button>
          </form>
          <img className="h-70 rotate-y-180" src="https://imgs.search.brave.com/yYZbe2je2gGM2utwDlhxniTUrTSF8JaBGSeGMcF6_8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw" alt="No Notes" />
        </div>


        <div>
          {
            task.map((elem, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <h3>
                      {elem.title}
                    </h3>
                    <p>
                      {elem.desc}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default App