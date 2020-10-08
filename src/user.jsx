
import React from "react"
import {useParams,useLocation, useHistory} from "react-router-dom"

const User = ()=>{
    const {fname,lname}=useParams()
    const location=useLocation()
    const history=useHistory()
    console.log(location)
    console.log(history)
    return(
        <>
     <h1>Hellow i am {fname} {lname} user page</h1>
     <p>my current location is {location.pathname}</p>

      {location.pathname===`/user/Robin/k` ?(
      <button onClick={()=>history.push('/')}>go back</button>):null}
     </>
    )
}

export default User;