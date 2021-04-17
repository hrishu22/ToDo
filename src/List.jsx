import React, { useState } from 'react'
import './index.css'
const List=(props)=> {
    
    return (



        <div className="extra">
             <li  
             className="list">
                 <button className="del"
                 
                 onClick={()=>{
                      props.onSelect(props.id)
                 }}
                 >X
                 </button>{props.text}</li>
            
        </div>
    )
}

export default List
