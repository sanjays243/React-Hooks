import { useEffect, useState } from "react";
import axios from "axios"
function API(){
    const [user,setUser]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUser(res.data))
        .catch((err)=>err.message)
    },[])
    return(
        <div>
            <hr />
            <center><h1>UseEffect - Hook</h1></center>

            <div className="api">
                <h1>API User Data</h1>
              <div className="apidata">
                  {user.map((data)=>{
                    return(
                        <div key={data.id}>
                            <h2>{data.id} . {data.name}</h2>
                            <h3>Username : {data.username}</h3>
                            <p>Email : {data.email}</p><br />
                        </div>
                    )
                })}
              </div>
            </div>

        </div>
    )
}
export default API;