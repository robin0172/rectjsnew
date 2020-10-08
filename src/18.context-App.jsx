import React, { createContext } from "react"
import ComA from "./ComA";

const Fristname=createContext()

const LastName=createContext()
const App=()=>{
   return(<>
        <Fristname.Provider value={"robin"}>
        <LastName.Provider value={'islam'}>
        <ComA/>
        </LastName.Provider>
        </Fristname.Provider>
      
   </>
   ) 
}

export default App;
export {Fristname,LastName};