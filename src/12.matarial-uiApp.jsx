import React, { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
const App=()=>{
    const [num,setNum]=useState(0)

    const incrementnumn=()=>{
        setNum(num+1)
    }
    const decrementnum=()=>{
        if(num>0){
            setNum(num-1)
        }else{
            setNum(0)
            alert("you can not do that")
        }
       
    }
    return(
        <>
           <div className="main-div">
               <div className="center_div">
                   <h1>{num}</h1>
                   <button onClick={incrementnumn}>Increment</button>
                   <button onClick={decrementnum}><RemoveIcon/></button>

               </div>
           </div> 
        </>
    )
}
export default App;