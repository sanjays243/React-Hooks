import { useContext } from "react";
import Parent from "./Parent";
import Data from "./Data";

function GrandParent(){
    const data=useContext(Data)
    return(
        <div ><hr />
            <center><h1>UseContex - Hook</h1></center>
            <div className="share">
                <h1 style={{marginTop:"15px"}}>SHARE DATA BETWEEN COMPONENTS</h1>
            <h2>GrandParent : {data} </h2>
            <Parent/>
            </div>
            
        </div>
    )
}
export default GrandParent;