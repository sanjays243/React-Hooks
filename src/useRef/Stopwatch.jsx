import { useRef, useState } from "react";

function Stopwatch(){
    const [seconds,setSeconds]=useState(0)

    const timerRef=useRef(null)

    function starttime(){
        if(timerRef.current !==null)
            return
        timerRef.current=setInterval(()=>{
            setSeconds(prev=>prev+1)
        },1000)
    }

    function stoptime(){
        clearInterval(timerRef.current)
        timerRef.current=null
    }

    function resettime(){
        stoptime()
        setSeconds(0)
    }
     return(
        <div><br />

            <h1>Stop Watch app</h1>
            <h2>StopWatch : {seconds} Seconds</h2>
            <button onClick={starttime}>Start</button>
            <button onClick={stoptime}>Stop</button>
            <button onClick={resettime}>Reset</button>

        </div>
    )
}
export default Stopwatch;