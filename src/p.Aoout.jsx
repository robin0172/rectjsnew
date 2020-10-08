import React from "react"
import Web from "../src/img/About.jpg"
import Common from "./p.Common"
const About=()=>{
 
return (
    <>
        <Common 
            name="Welcome to About page"
            imgsrc={Web}
            visit="/contract"
            btname="contact Now"
        />
    </>
)

}
export default About;