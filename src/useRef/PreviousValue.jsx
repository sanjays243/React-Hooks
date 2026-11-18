import { useEffect, useRef, useState } from "react";

function PreviousValue(){
    const [count,setCount]=useState(0)
    const previousvalueRef=useRef()

    useEffect(()=>{
        previousvalueRef.current=count
    },[count])
    return(
        <div>
            <h1 style={{marginTop:"15px"}}> PreviousValue </h1>

            <h2 style={{padding:"10px"}}>Current Value : {count}</h2>
            <h2 style={{padding:"10px"}}>Previouse Value : {previousvalueRef.current} </h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>

        </div>
    )
}
export default PreviousValue;