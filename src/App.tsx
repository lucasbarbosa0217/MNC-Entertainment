import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'
import Caderno from './components/Caderno'
import Washi from "./assets/washi.svg";
import Fundo from "./assets/fundo.webp";



function App() {

  return (
    <>
      <div className='absolute w-full h-full inset-0'>
        <img src={Fundo} className='w-full h-full object-cover'></img>

      </div>
    <div className='min-w-screen min-h-screen flex flex-col'>
        <Menu />

        <div className='grow flex justify-between h-full'>
          <div className='w-4/5 justify-between flex p-8 pr-32 pb-24 relative bg-gradient-to-r from-blue-800 to-transparent flex-col items-start'
>

        <h1 className='text-6xl '>Escola Minecraft</h1>
            <Caderno rotate={"6"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ex mauris, consequat nec consequat tempor, blandit ut augue. Nulla id eleifend felis, non maximus dolor. Phasellus nec volutpat velit, id consequat enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam varius elit vitae metus condimentum, euismod rutrum ex tempor.
              <img src={Washi} className='absolute top-0 right-[-4rem] z-40 rotate-45 w-[8rem]'></img>
              <img src={Washi} className='absolute bottom-0 left-[-2rem] z-40 rotate-45 w-[8rem]'></img>

            </Caderno>
          </div>
  

        
          
        </div>

    </div>
     

     
    </>
  )
}

export default App
