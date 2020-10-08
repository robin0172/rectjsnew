import React from "react"
 import logo from "./img/download.png"

const Header=()=>{
    return<>
           <div className="header">
               <img src={logo} alt="logo" width='70' height='50'/>
               <h1>Thapa Keep</h1>
           </div>
    </>
}
export default Header;