import React, { useState } from "react"

const Contract = () => {
  const [data,setdata]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })
  const InputEvent=(event)=>{
 const {name,value}=event.target
  setdata((prevalue)=>{
    return {
      ...prevalue,
      [name]:value
    }
  })
  }
  const formSubmit=(e)=>{
    e.preventDefault();
    alert( `my name is ${data.fullname} my mobile number is ${data.phone}
    my email is ${data.email}`)

  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container center_div">
        <div className="row">
          <div classNam="col-md-6 col-12 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text"  onChange={InputEvent} value={data.fullname} name="fullname" class="form-control" placeholder="enter your name" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">phone number</label>
                <input type="number" onChange={InputEvent} value={data.phone} name="phone" class="form-control" id="exampleFormControlInput1" placeholder="enter your mobile number" />
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email"  onChange={InputEvent} value={data.email} name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>


              <div class="form-group">
                <label for="exampleFormControlTextarea1">Massage</label>
                <textarea onChange={InputEvent} value={data.msg} name="msg"
                 class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="my-3 btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}
export default Contract;
