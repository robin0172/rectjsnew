import React from "react"
import { useState } from "react"

const App=()=>{
    const [name,setname]=useState("");
    const [fullName,setfullname]=useState()
    const [lastname,setlastname]=useState()
    const[newlastname,newsetlastname]=useState();
    
    const inputEvent=(event)=>{
        setname(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault()
        setfullname(name)
        newsetlastname(lastname)
    }
    const inputEventTwo=(event)=>{
         setlastname(event.target.value)
    }
    return(
 <>
 <form onSubmit={onSubmit}>
     <div>
         <h1>Hellow {fullName}{newlastname}</h1>
         <input type="text" placeholder="Enter your name"
             onChange={inputEvent}
         />
         
         <input type="text" placeholder="Enter your last name"
             onChange={inputEventTwo}/>
         <button type='submit'>Click me</button>
     </div>
     </form>
 </>
    )
}

export default App;