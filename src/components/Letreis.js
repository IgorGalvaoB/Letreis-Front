import { useState } from "react";
import Cube from "./ui/Cube";

function Letreis() {
  
  const [deg,setDeg] = useState(0)
  return (
    <>
      <button onClick={()=>setDeg(deg+90)}>aaa</button>
      
        <Cube deg={deg}></Cube>
     
    </>
  );
}

export default Letreis;
