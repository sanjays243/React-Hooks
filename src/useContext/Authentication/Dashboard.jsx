import { useContext } from "react";
import UserData from "./UserData";

function Dashboard(){
    const {user,setUser}=useContext(UserData)
    return(
        <div>
            <h1>Authentication</h1>
            {user? (
                <>
                <h1>Welcome {user.name}</h1>
                <button onClick={()=>setUser(null)}>Logout</button>
                </>):(
                    <>
                    <h1>Please Login</h1>
                    <button onClick={()=>setUser({name:"Sanjay",email:"sanjays34310@gmail.com"})}>Login</button>
                    </>
                )}
        </div>
    )
}
export default Dashboard;