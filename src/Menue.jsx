import React  from "react"
import {NavLink} from "react-router-dom"

const Menue=()=>{
    return(
    <>
        <NavLink exact activeClassName="active_class" to='/'>AboutUs </NavLink>
        <NavLink exact activeClassName="active_class" to='/contract'> contract</NavLink>
        <NavLink exact activeClassName="active_class" to='/user/Robin/islam'> user</NavLink>
       <NavLink to="/search">  seearch  </NavLink>
       <NavLink to="/searchresult">searchresult  </NavLink>

       

 <br/>
       <a href="/">AboutUs </a>
       <a href="/contract">contract</a>
       </>
    )
   
}
export  default Menue;