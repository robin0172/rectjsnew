import React,{useContext} from 'react'
import React from "react"
// import ComC from "./ComC";
import { Fristname, LastName } from "18.context-App.jsx"

const ComB=()=>{
  const fname=useContext(Fristname)
  return (
    <h1>My name is {fname}</h1>
  )
    
  
}
export default ComB;