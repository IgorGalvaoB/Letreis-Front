import { useState } from "react";
import Cube from "./ui/Cube";
import App from './ui/styles/App'
function Letreis() {
  
  const [deg,setDeg] = useState(0)
  return (
    <>
      <button onClick={()=>setDeg(deg+90)}>aaa</button>
      <div >

        {/* <Cube deg={deg}></Cube> */}
        <App></App>
      </div>
     
    </>
  );
}

export default Letreis;
