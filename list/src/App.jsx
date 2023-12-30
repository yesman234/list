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
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
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
