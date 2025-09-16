import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*{}~`+=[]_-"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)  
      pass += str.charAt(char)    
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  useEffect(()=> {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5) // It will select only 5 characters staring from 0
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center pt-4 my-3'><strong>Password Generator</strong></h1>
      <div className='flex shadow overflow-hidden rounded-lg bg-white mt-px'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label >Length: {length}</label>
        </div>
        <div>
          <input
          type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed(prev => !prev);
          }}
          />
          <label htmlFor='numberInput' >Numbers</label>
        </div>
        <div>
          <input
          type="checkbox"
          defaultChecked = {characterAllowed}
          id='charInput'
          onChange={() => {
            setCharacterAllowed(prev => !prev);
          }}
          />
          <label htmlFor='charInput' >Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}


export default App
