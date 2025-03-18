import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Card({title}){
  return(
    <>
    <div className='card'>
      <h2>{title}</h2>
    </div>
    </>
  )

}

function App() {
  return (
    <>
      <div className='card-container'>
        <Card title='Star Wars'/>
        <Card title='Avatar'/>
        <Card title='Lion King'/>
      </div>

    </>
  )
}

export default App
