import "./App.css"
import Counter from "./Counter";
import {useState} from "react"
import Iframe from 'react-iframe'




function App() {

  const[mountable,setMountable] = useState(false)


  return (
    <div >

      <h1>sample</h1>
      <Iframe url="https://anglofone.co.in/"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
    </div>
  );
}

export default App;
