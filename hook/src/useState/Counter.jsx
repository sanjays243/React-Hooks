import { useState } from "react";

function Counter(){
    const [counter,setCounter]=useState(0)
    return(
        <div>
            <h1 className="state">UseState - Hook</h1>
            <h2>Counter App</h2>
            <div className="counter">
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
            </div>
        </div>
    )
}
export default Counter;