import React from 'react'
import { useState } from 'react';

const App=()=>{
    let newtime=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(newtime)

    const updateTime=()=>{
       
      let  newCtime=new Date().toLocaleTimeString();
      setCtime(newCtime)
    }

    return(<>
         <h1>{newtime}</h1>
         <button onClick={updateTime}>Get time</button>
         </>
    )
}
export default App;