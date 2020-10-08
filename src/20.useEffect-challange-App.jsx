import React, { useEffect } from "react"
import { useState } from "react";

const App=()=>{
    const [num,setnum]=useState(0);

    useEffect(()=>{
        document.title=`you clicked me ${num}`
    })
 return <button onClick={()=>{
     setnum(num+1)
 }}> clicked me {num} </button>
}
export default App;