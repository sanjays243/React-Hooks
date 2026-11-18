import { useContext } from "react";
import Dark from "./Dark";

function Home(){
    const {theme,setTheme}=useContext(Dark)
    return(
        <div style={{
            background:theme==="light"? "white":"black",
            color:theme==="light"? "black":"white",
            padding:"30px"
        }}>
            <h1> Dark and Light Theme</h1>
            <h2>{theme} Theme</h2>
            <button onClick={()=>setTheme(theme==="light"? "dark":"light")}>Change Theme</button>
        </div>
    )
}
export default Home;