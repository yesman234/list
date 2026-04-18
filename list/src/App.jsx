import { useState} from 'react'
import './App.css'
const initialItems = [
  {id:1,description:"Passports",quanity:5,packed:false},
  {id:4,description:"Currency",quanity:7,packed:true},
  {id:2,description:"PJs",quanity:12,packed:false}
]

function App() {
  //here
  const [items, setItems] = useState([...initialItems]);
function handleAddItems(item){
    setItems((items)=>[...items,item])
  }
function handleToggleItem(id){
  //not setting item state 
  setItems(items)
    items.map((item)=>{
    
      item.id === id ? {...item, packed:!item.packed} : item;
    })
}

function handleDeleteItem(id){ 
  console.log(`${id}`)
  setItems((...items)=>items.filter((item)=>item.id !== item.id))
}

  return (
    <>
      <div className='app'>
    <Logo />
    <Form onAddItems = {handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
    <Stats />
       </div>
    </>
  )
}
function Logo(){
  return <h1>Far away</h1>
}
function Form({onAddItems}){
  const [description,setDescription] = useState('');
  const [quanity, setQuanity] = useState(5);
  function handleSubmit(e){
     e.preventDefault();
     if(!description)return;
     const newItem = {description,quanity,packed:false,id:Date.now()}
     console.log(newItem,'<<newItem')
     onAddItems(newItem);
     setDescription("")
     setQuanity(1)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
    <select value={quanity} onChange={(e)=>setQuanity(Number(e.target.value))}>
     {Array.from({length: 20},(_,i)=>i + 1).map((num=>
     <option value={num} key={num}>
      {num}
      </option>
      ))}
    </select>
    <input type="text" placeholder='...Item' value={description}
    onChange={(e)=>{
      setDescription(e.target.value);
    }}  
    />

    <button>Add</button>
    </form>
  )
}
function PackingList({items,onDeleteItem, onToggleItem}){
  return <div className="list">List
  <ul>
  {items.map(item => (
       <Item item={item} onDeleteItem={onDeleteItem} key={item.id} onToggleItem={onToggleItem}/>
    ))}
  </ul>
  </div>
}
function Item({item, onDeleteItem, onToggleItem}){
  return(
    <li>
      <input type='checkbox' value={item.packed} onChange={((id)=>onToggleItem(item.id))}/>
    <span style = {initialItems.packed ? {style:"line-through"}:{}}>
    {item.quanity}
    {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id !== item.id)}>❌</button>
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
