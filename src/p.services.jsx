import React from "react"
import Card from "./p.Card"
import Sdata from "./p.sdata";
const Services=()=>{
 
return (
    <>
        <div className="text-center">
            <h1>Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
            {
                Sdata.map((val,ind)=>{
                    return <Card
                     key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                    />
                })
            }
 
          </div>
          </div>
    </>
)

}
export default Services;