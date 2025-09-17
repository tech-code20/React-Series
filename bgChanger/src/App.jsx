import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button
            onClick={()=> setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={()=> setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "green"}}
            >Green</button>
            <button
            onClick={()=> setColor("black")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "black"}}
            >Black</button>
            <button
            onClick={()=> setColor("white")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
            style={{backgroundColor: "white"}}
            >White</button>
            <button
            onClick={()=> setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button
            onClick={()=> setColor("pink")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "pink"}}
            >Pink</button>
            <button
            onClick={()=> setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "purple"}}
            >Purple</button>
            <button
            onClick={()=> setColor("gray")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "gray"}}
            >Gray</button>
            <button
            onClick={()=> setColor("olive")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "olive"}}
            >Olive</button>
           
            <button
            onClick={()=> setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <input
            onChange={(e)=>setColor(e.target.value)}
            
             type="color" 
             id='color'
             hidden /> 
             <label htmlFor="color" className='rounded-full text-white outline-none cursor-pointer px-4 py-1' style={{backgroundColor: color}}>Custom</label>
          </div>
      </div>
    </div>
  )
}

export default App
