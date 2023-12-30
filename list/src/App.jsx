import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const initialItems = [{id:1,description:"Passports",quanity:2,packed:false},{id:2,description:"PJs",quanity:12,packed:false}]
  return (
    <>
      <div className='app'>
    <Logo />
    <Form />
    <PackingList />
    <Stats />
       </div>
    </>
  )
}
function Logo(){
  return <h1>Far away</h1>
}
function Form(){
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  )
}
function PackingList(){
  return <div className="list">List</div>
}
function Stats(){
  return (
    <footer className="stats">
      <em>Your have x items packed in your bag and ypu have x to go.</em>
    </footer>
  )
}



export default App
