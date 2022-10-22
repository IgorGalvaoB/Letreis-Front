import { useState } from "react";
import Cube from "./ui/Cube";
import App from './ui/styles/App';

function Letreis() {
  const [word,setWord] = useState(["A","G","O","R","A","S"])
  const [backWord,setBackWord] = useState([["A",1],["G",1],["O",0],["R",1],["A",2],["S",1]])

  const [deg,setDeg] = useState(0)
  return (
    <>
      <button onClick={()=>setDeg(deg+90)}>aaa</button>
      <button onClick={()=>setBackWord([["A",2],["G",1],["O",0],["R",1],["A",2],["S",1]])}>aaa</button>
      <div style={{width:'60px',perspective:'200px'}}>
        <Cube deg={deg} word={word} backWord={backWord} id={0} select={1}></Cube>
        {/* <App></App> */}
      </div>
     
    </>
  );
}

export default Letreis;
