import React, { useState } from "react"
import Searchresult from "./searchresult"
const Search=()=>{

    const [img,setimg]=useState()
    const inputEvent=(event)=>{
           const data=event.target.value
           console.log(data)
           setimg(data)
    }
 return (
     <>
     <div className="searchbar">
     <input type="text"  value={img} placeholder="search Anything" onChange={inputEvent}/>

     </div>
     <Searchresult newimg={img}/>
     </>
 )
}
export default Search;