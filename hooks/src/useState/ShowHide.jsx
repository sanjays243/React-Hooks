import { useState } from "react";

function ShowHide(){
    const [show,setShow]=useState(false)
    return(
        <div className="show">
            <h2>Show / Hide Password</h2>
            <input type={show? "text":"password"} placeholder="Enter your password"/>
            <button onClick={()=>setShow(!show)}>{show? "Hide":"Show"}</button>

        </div>
    )
}
export default ShowHide;