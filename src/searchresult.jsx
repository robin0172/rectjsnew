import React from "react"

const Searchresult=(props)=>{
    const img=`https://source.unsplash.com/user/erondu/600x400/?${props.newimg}`
      return  (
          <>
              <div>
                  <img src={img} alt="srach"/>
              </div>
          </>
      )
}
export default Searchresult;