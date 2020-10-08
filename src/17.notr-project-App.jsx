import React, { useState } from "react"
import Header from "./header"
import Footer from "./Footer"
import CreateNOte from "./CreateNOte"
import Note from "./Note.jsx"

const App=()=>{
    const [addItem,setadditem]=useState([])

    const addNote=(note)=>{
        setadditem((prevData)=>{
            return [...prevData,note]
        })
    }
    return<>
          <Header/>
          <CreateNOte passNote={addNote}/>
          <Note/>

        {  addItem.map((val,index)=>{
              return <Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}

              />
          })}
          
          <Footer/>
    </>
}
export default App;