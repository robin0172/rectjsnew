import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";

const ListCom=(props)=>{
    const [line,setLine]=useState(false)

    const cutit=()=>{
            setLine(true)
    }
 return(
     <>
         <span onClick={cutit}><DeleteIcon/></span>
         <li style={{textDecoration:line? "line-through" : "none"}}>{props.text}</li>
     </>
    
 )
}

export default ListCom
