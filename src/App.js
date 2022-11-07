import React from "react";
import { useState,useRef,useMemo } from "react";




function App() {

const[items,setItems] = useState([])
const[query,setQuery]= useState("")
const inputRef= useRef()

const filterdItems = useMemo(()=> {
  return items.filter(item=> {
  return item.toLowerCase().includes(query.toLowerCase())
  })
},[items,query])




function onSubmit(e){
  e.preventDefault()
  const value = inputRef.current.value
  if(value === "") return
  setItems(prev=>{
    return[...prev,value]
  })
  inputRef.current.value = ""
}



  return (
    <>
      Search Item:
      <input value={query} onChange={(e)=> setQuery(e.target.value)} type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
      New Item:
      <input type="text" ref={inputRef} />
      <button type="submit">Add</button>
      </form>
      <h3> Items:</h3>
      {filterdItems.map(item=>(
       <div>{item}</div> ))}
      
    </>
  );
}

export default App;
