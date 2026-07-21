import { useState, useCallback } from 'react'

function App() {
    const [length, setLength] = useState(8);
    const [numbersAllowed, setNumbers] = useState(false);
    const [symbolsAllowed, setSymbols] = useState(false);
    const [password, setPassword] = useState('');

    const passwordgenerator = useCallback(() => {
      const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (numbersAllowed) {
        str += '0123456789';
      }
      if (symbolsAllowed) {
        str += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
      }
      let password = '';
      for (let i = 0; i < length; i++) {
        password += str.charAt(Math.floor(Math.random() * str.length));
      }
      setPassword(password);
    }, [length, numbersAllowed, symbolsAllowed, setPassword]);

    const copyToClipboard = () => {
      navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4 border-2 border-gray-500 rounded-md bg-gray-800 p-8 w-full max-w-md">
        <h1 className="text-3xl text-center text-white">Password Generator</h1>
        <div className="text-white border-2 border-gray-500 rounded-md p-4 w-full text-center text-xl font-mono">
          {password || 'Click Generate'}
        </div>
        
        <div className="flex flex-col gap-3 w-full">
          <label className="flex items-center gap-2 text-white">
            <input 
              type="checkbox" 
              checked={numbersAllowed} 
              onChange={(e) => setNumbers(e.target.checked)} 
              className="w-5 h-5"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2 text-white">
            <input 
              type="checkbox" 
              checked={symbolsAllowed} 
              onChange={(e) => setSymbols(e.target.checked)} 
              className="w-5 h-5"
            />
            Include Symbols
          </label>
          <label className="flex items-center gap-2 text-white">
            Length:
            <input 
              className="p-2 rounded-md text-black w-20" 
              type="number" 
              value={length} 
              onChange={(e) => setLength(Number(e.target.value))} 
              min="4"
              max="50"
            />
          </label>
        </div>

        <div className="flex gap-4 w-full">
          <button 
            onClick={passwordgenerator}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold"
          >
            Generate Password
          </button>
          <button 
            onClick={copyToClipboard}
            disabled={!password}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </>
  )
}

export default App
