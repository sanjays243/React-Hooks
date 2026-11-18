import { useEffect, useState } from "react";

function TimerCleanup(){
    const [count,setCount]=useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prev) => prev + 1)
        },1000)

       return()=>{
        clearInterval(timer)
       }
    },[])
    return(
        <div className="timer">
            <h1>Timer Cleanup </h1>
            <h2>Timer : {count}</h2>
            
        </div>
    )
}
export default TimerCleanup;