import React from "react"
import {Route,Switch} from "react-router-dom"
import About from "./About"
import Contract from "./Contract"
import Error from "./Error"
import Menue from "./Menue"

const App=()=>{
    const Name=()=>{
        return <h1>Hellow,I am a Namw page</h1>
    }
    return (
        <>
        <Menue/>
        <Switch>
        <Route exact path="/" render={()=><About name="about"/>}/>
            <Route exact path="/contract" component={Contract}/>
            <Route path="/contract/name" component={Name}/>

            <Route component={Error}/>
        </Switch>
        {/* <About/>
        <Contract/> */}
        </>
    )
}

 export default App;