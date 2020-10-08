import React from "react"
import Home from "./p.Home"
import About from "./p.Aoout"
import Contract from "./p.Contact"
import Services from "./p.services"
import Fotter from "./p.fotter"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./p.Navbar"
import {Redirect, Route,Switch} from "react-router-dom"
const App=()=>{
 
return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contract" component={Contract}/>
    <Route exact path="/service" component={Services}/>
    <Redirect to="/"/>

    
    </Switch>
    <Fotter/>
    </>
)

}
export default App;