import API from "./useEffect/API";
import TimerCleanup from "./useEffect/TimerCleanup";
import Counter from "./useState/Counter";
import Formhandling from "./useState/Formhandling";
import ShowHide from "./useState/ShowHide";

function App(){
  return(
    <div>
      <Counter/>
      <ShowHide/>
      <Formhandling/>

      <API/>
      <TimerCleanup/>
    </div>
  )
}
export default App;