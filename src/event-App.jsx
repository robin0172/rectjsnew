import React from "react"
import { useState } from "react"

const App=()=>{
    const parpul='#8e44ad'
    const [bg,setBg]=useState(parpul)
    const [name,setname]=useState('click Me')
    
    const bgChange=()=>{
        let newBg='#34495e'
        setBg(newBg)
        setname("Ouch 🎱")
    }
    const bgback=()=>{
        setBg(parpul);
        setname("Ayyo!!")
    }
    return(
        <>
           <div style={{backgroundColor:bg}}>
               <button onClick={bgChange} onDoubleClick={bgback}>{name}</button>
           </div>
        </>
    )
}
export default App;