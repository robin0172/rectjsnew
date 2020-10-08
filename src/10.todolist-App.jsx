import React, { useState } from "react";
 import  ToDoList from './todolist'


const App=()=>{

    const [inputlist,setInput]=useState("")
    const [Items,setItem]=useState([])

const inputEvent=(event)=>{
    setInput(event.target.value)


}

const Listofitem=()=>{
    setItem((oldItems)=>{
        return[...oldItems,inputlist]
    })
    setInput("");
}
return(
    <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a item" onChange={inputEvent}/>
                <button onClick={Listofitem}>+</button>

                <ol>
                    {/* <li>{inputlist}</li> */}
                   { Items.map( (itemval) => {
                        return <ToDoList
                            text={itemval}
                        />
                    })}
                </ol>
            </div>
        </div>
    </>
)
}
export default App;