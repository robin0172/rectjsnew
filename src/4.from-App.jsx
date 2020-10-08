import React from "react"
import { useState } from "react"

const App=()=>{
    const [name,setname]=useState("");
    const [fullName,setfullname]=useState()
    const inputEvent=(event)=>{
        setname(event.target.value)
    }
    const onSubmit=()=>{
        setfullname(name)
    }
    return(
 <>
     <div>
         <h1>Hellow {fullName}</h1>
         <input type="text" placeholder="Enter your name"
             onChange={inputEvent}
         />
         <button onClick={onSubmit}>Click me</button>
     </div>

</>
    )
}

export default App;