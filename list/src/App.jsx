import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const initialItems = [{id:1,description:"Passports",quanity:5,packed:false},{id:2,description:"PJs",quanity:12,packed:false}]

function App() {
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
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
    <select>
     {Array.from({length: 20},(_,i)=>i + 1).map((num=>
     <option value={num} key={num}>
      {num}
      </option>
      ))}
    </select>
    <button>Add</button>
    </form>
  )
}
function PackingList(){
  return <div className="list">List
  <ul>
  {initialItems.map(item => (
       <Item item={item} key={item.id}/>
    ))}
  </ul>
  </div>
}
function Item({item}){
  return(
    <li>
    <span style = {initialItems.packed ? {style:"line-through"}:{}}>
    {item.quanity}
    {item.description}
    </span>
    <button>X</button>
    </li>
  )
}
function Stats(){
  return (
    <footer className="stats">
      <em>Your have x items packed in your bag and ypu have x to go.</em>
    </footer>
  )
}



export default App
