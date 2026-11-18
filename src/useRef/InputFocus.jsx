import { useRef } from "react";

function InputFocus(){
    const inputRef=useRef("")
    function handledata(){
        inputRef.current.focus()
    }
    return(
        <div>
            <hr />
          <center>  <h1>UseRef - Hook</h1></center>

            <h1>InputFocus</h1>
            <input type="text" placeholder="Enter some text" ref={inputRef}/>
            <button onClick={handledata}>Click to focus</button>
        </div>
    )
}
export default InputFocus;