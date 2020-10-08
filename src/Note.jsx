import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';
const Note=()=>{
    return<>
        <div className="note">
            <h1>tite</h1>
            <br/>
            <p>this is the content</p>
            <button>
            <DeleteIcon className="deleteIcon"/>
            </button>
        </div>
    </>
}
export default Note;