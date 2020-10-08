import React, { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const ComA=()=>{
    const [num,setnum]=useState()
    const [name,setname]=useState()
    const [move,setmove]=useState()

    useEffect(()=>{
        async function getData(){
             const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
             console.log(res.data.name)
             setname(res.data.name)
             setmove(res.data.moves.length)
        }
        getData()
    })
    return<>
           
           <h1>you choose <span style={{color:'red'}}>{num}</span></h1>
           <h1>my name is <span style={{color:'red'}}>{name}</span></h1>
           <h1>i have <span style={{color:'red'}}>{move}</span> moves</h1>



             <select name="" id="" value={num} onChange={(event)=>{
                    setnum(event.target.value)
             }}>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>

             </select>
    </>
}
export default ComA;