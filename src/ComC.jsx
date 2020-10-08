import React from "react"
import { Fristname, LastName } from './18context-App'

const ComC = () => {
  return <>
    <Fristname.Consumer>{(fname) => {
      return (
        <LastName.Consumer>{(lane) => {
          return (
            <h1>My name is {fname} {lane}</h1>

          )
        }}

        </LastName.Consumer>
      )

    }}

    </Fristname.Consumer>


  </>
}
export default ComC;