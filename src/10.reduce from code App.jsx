import React from "react"
import { useState } from "react"

const App = () => {
    const [FullName, setFullname] = useState({
        fname:'',
        lname:"",
        email:"",
        phone:""
    });

    const inputEvent = (event) => {
    const {value,name}=event.target
        setFullname((preValue)=>{
            return{
                ...preValue,
                [name]:value

            }
              
                
            
          console.log(preValue)
        // if(name==='fName'){
        //     return{
        //         fname:value,
        //         lname:preValue.lname,
        //         email:preValue.email,
        //         phone:preValue.phone
        //     }
          
        // } else if(name==='LName'){
        //     return{
        //         lname:value,
        //         fname:preValue.fname,
        //         email:preValue.email,
        //         phone:preValue.phone
        //     }
        // }else if(name==='email'){
        //     return{
        //         lname:preValue.lname,
        //         fname:preValue.fname,
        //         email:value

                
        //     }
        // }else if(name==='phone'){
        //     return{
        //         lname:preValue.lname,
        //         fname:preValue.fname,
        //         email:preValue.email,
        //         phone:value
        //     }
        // }

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
                    <h2>{FullName.email}</h2>
                    <input type="text" placeholder="Enter your name"
                        name='fname'
                        onChange={inputEvent}
                        // value={FullName.fName}
                    />

                    <input type="text" placeholder="Enter your last name"
                        name='Lname'
                        onChange={inputEvent} 
                            // value={FullName.LName}
                        />
                           <input type="email" placeholder="Enter your name"
                        name='email'
                        onChange={inputEvent}
                        // value={FullName.email}
                    />
                       <input type="number" placeholder="Enter your name"
                        name='phone'
                        onChange={inputEvent}
                        // value={FullName.phone}
                    />
                    <button type='submit'>Click me</button>
                </div>
            </form>
        </>
    )
}

export default App;