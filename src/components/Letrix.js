import { useState } from "react";
import EmptySquare from "./ui/EmptySquare";

function Letrix() {
  const [change,setChange] = useState(false)
  return (
    <div style={{width:'80px'}}>
      <EmptySquare isAnimated={change} id={0}></EmptySquare>
      <button onClick = {()=>setChange(!change)}>aaa</button>
    </div>
  );
}

export default Letrix;
