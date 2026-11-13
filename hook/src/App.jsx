import { useState } from "react";
import Dark from "./useContext/Darktheme/Dark";
import Home from "./useContext/Darktheme/Home";
import Data from "./useContext/ShareData/Data";
import GrandParent from "./useContext/ShareData/GrandParent";
import API from "./useEffect/API";
import TimerCleanup from "./useEffect/TimerCleanup";
import Counter from "./useState/Counter";
import Formhandling from "./useState/Formhandling";
import ShowHide from "./useState/ShowHide";
import Dashboard from "./useContext/Authentication/Dashboard";
import UserData from "./useContext/Authentication/UserData";

function App(){
  const username="Sanjay"
  const [theme,setTheme]=useState("light")
  const [user,setUser]=useState(null)
  return(
    <div>
      <Counter/>
      <ShowHide/>
      <Formhandling/>

      <API/>
      <TimerCleanup/>

      <Data.Provider value={username}>
        <GrandParent/>
      </Data.Provider>
      <Dark.Provider value={{theme,setTheme}}>
        <Home/>
      </Dark.Provider>
      <UserData.Provider value={{user,setUser}}>
      <Dashboard/>
      </UserData.Provider>
    </div>
  )
}
export default App;