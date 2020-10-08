import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from "./listcompo"
import { useState } from 'react';
const ToDolist=()=>{
      const [item,setItem]=useState()
      const [newitem,setNewItem]=useState([])

      const itemevent=(event)=>{
        setItem(event.target.value)
      }

      const listOfItem=()=>{
        setNewItem((prevalue)=>{
return [...prevalue,item]
        })
        setItem(" ")
      }

    return( <>
        <div className="centerdiv">
<br/>
<h1>ToDO List</h1>
<br/>
<input type="text" value={item} placeholder='add an item' onChange={itemevent}/>
<Button className="newBtn" onClick={listOfItem}>

<AddIcon/></Button>
<br/>
<ol>


{newitem.map((val,index)=>{
 return <ListCom key={index} text={val}/>
})}

</ol>
</div>
    </>
    )
}


export default ToDolist;