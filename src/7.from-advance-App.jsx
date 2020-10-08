import React from "react"
import { useState } from "react"

const App = () => {
    const [FullName, setFullname] = useState({
        fname:'',
        lname:"",
    });

    const inputEvent = (event) => {
        const value=event.target.value
        const name=event.target.name

        setFullname((preValue)=>{
        //  console.log(preValue)
        if(name==='fName'){
            return{
                fname:value,
                lname:preValue.lname,
            }
          
        } else if(name==='LName'){
            return{
                lname:value,
                fname:preValue.fname
            }
        }
        })

    }
    const onSubmit = (event) => {
        event.preventDefault()
        alert('from submitted')

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hellow {FullName.fname}{FullName.lname}</h1>
                    <input type="text" placeholder="Enter your name"
                        name='fName'
                        onChange={inputEvent}
                        value={FullName.fName}
                    />

                    <input type="text" placeholder="Enter your last name"
                        name='LName'
                        onChange={inputEvent} 
                            value={FullName.LName}
                        />
                    <button type='submit'>Click me</button>
                </div>
            </form>
        </>
    )
}

export default App;