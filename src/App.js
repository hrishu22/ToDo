import React, { useState } from 'react'
import List from './List.jsx'
const App=() =>{
    const [item, setItem]=useState();
    const [items,setItems]=useState([]);
const Input=(event)=>{
    setItem(event.target.value)
}
const Submit=()=>{
    setItems((old)=>{
        return [...old,item]
    })
    setItem(" ")
}
const Delete=(id)=>{
 setItems((old)=>{
     return old.filter((arr,index)=>{
              return index!==id
     })  
 })   
}
    return (
        <div className="center">
            <div className="main">
                <h1>Todo List</h1>
                <input 
                placeholder="Add an Item"
                className="input"
                onChange={Input}
                value={item}/>
                <button className="button"
                onClick={Submit}>+</button>
                <ol>
                  {items.map((itemval,index)=>{
                      return<List
                      text={itemval}
                      key={index}
                      id={index}
                      onSelect={Delete}
                          
                      />
                  })}  
                </ol>
            </div>
       </div>
    )
}
export default App
