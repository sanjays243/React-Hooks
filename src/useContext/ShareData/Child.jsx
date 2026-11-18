import { useContext } from "react";
import Data from "./Data";

function Child(){
    const data=useContext(Data)
    return(
        <div>
            <h2>Child : {data}</h2>
        </div>
    )
}
export default Child; 
