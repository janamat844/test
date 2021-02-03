import React,{createContext} from 'react';
//import Hooks from './Hooks'
//import Hookseffects from './Hookseffects'
import CompZ from './CompZ'
const First_name=createContext();
const Last_name=createContext();


function App() {

return (
    <div>
      <First_name.Provider value={"ram"}>
        <Last_name.Provider value={"kc"}>
          <CompZ/> 
          </Last_name.Provider>
        
      </First_name.Provider>

     

    </div>
  )
}
export default App;
export {First_name};
export {Last_name};
