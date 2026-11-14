import { useRef } from "react";

function ImageChange(){
    const imgRef=useRef()
    function imgchange(){
        imgRef.current.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10"
    }
    
    return(
        <div><br />
            <h1>Image Change</h1>
            <img ref={imgRef} style={{height:"200px",width:"250px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzo4TL-XQQ8nLnziziTGXUchKDjEDHj4NNIcqGbx0pQ&s=10" alt="" />
            <button onClick={imgchange}>Change Image</button>

        </div>
    )
}
export default ImageChange;