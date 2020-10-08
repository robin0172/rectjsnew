import React from "react"
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";

const CreateNOte=()=>{
    const [note,setNote]=useState({
        titel:"",
        Content:""
    })

    const  imputevent=(event)=>{
        
        const {name,value}=event.target

        setNote((preData)=>{
            return {
                ...preData,
                 [name]:value,
            }
        })
    }

    const AddEvent=(propos)=>{
        
     propos.passNote(note)
        
           
    }

    return(
    <>
          <div className="main_note">
          <form action="">
              <input type="text" 
              name="titel"
               value={note.titel} 
               onChange={imputevent} 
               placeholder="title"
                autoComplete="off"/>

              <textarea rows=''
              name="Content"
                value={note.Content}
                 onChange={imputevent} 
                 column="" 
                 placeholder="write or not">

                 </textarea>
             <Button >
                 <AddIcon className="plus_sign" onClick={AddEvent} />
             </Button>
          </form>

          </div>
    </>
    )
}
export default CreateNOte;