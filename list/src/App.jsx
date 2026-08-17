import { useState} from 'react'
import './App.css'


function App() {
  //here
  const [items, setItems] = useState([]);
  let len = items.length;
  function handleAddItems(item){
    setItems(items=>[...items,item])
  }
function handleToggleItem(id){
  //not setting item state 
  //setItems((items)
    items.map((item)=>{
      item.id === id ? {...item, packed:!item.packed} : item;
    })
}

function handleDeleteItem(id){ 
  console.log(`${id}`)
  setItems(items=>items.filter((item)=>item.id !== id))
}

  return (
    <>
      <div className='app'>
    <Logo />
    <Form onAddItems = {handleAddItems} />
    <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
    <Stats items={items}/>
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
     let newItem = {description,quanity,packed:false,id:Date.now()}
     console.log(newItem,'<<newItem',"#handleSubmit")
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
      <input type='checkbox' value={item.packed} onChange={onToggleItem(item.id)}/>
    <span style = {item.packed===true ? {style:"line-through"}:{}}>
    {item.quanity}
    {item.description}
    </span>
    <button onClick={()=>onDeleteItem(item.id)}>❌</button>
    </li>
  )
}
function Stats({items}){
  const len = items.length;
  const filtered = items.filter((a)=>a.packed.length);
  let perc = Math.round(filtered/len*100)
  return (
    <footer className="stats">
    <em>{perc===100 ? "You did it!" : `You still need to pack ...${len}, and you already packed ${filtered} (${perc})%`}</em>
    </footer>
  )
}



export default App
