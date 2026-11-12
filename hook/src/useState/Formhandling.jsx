import { useState } from "react";

function Formhandling(){
    const [input,setInput]=useState("")
    return(
        <div className="formhandling">
            <h2>Form Input Handling</h2>

            <input type="text" 
            placeholder="Enter your name" 
            value={input}
            onChange={(e)=>setInput(e.target.value)} />

            <h3>Your Name : {input}</h3>
        </div>
    )
}
export default Formhandling;