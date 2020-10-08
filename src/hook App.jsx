import React, { useState } from 'react';



const App=()=>{
  let state=useState();//useState is the hook in react.
// console.log(state)

const [count,setcout]=useState(0)

const IncNUm=()=>{
  setcout(count+10)
   console.log('clicked')
}
  return(
    <>
    <h1>{count}</h1>
    <button onClick={IncNUm}>Click me</button>
    </>
  )
   
}
export  default App;