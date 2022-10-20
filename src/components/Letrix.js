import { useState } from "react";
import AnimatedItem from "./ui/AnimatedItem";
import EmptySquare from "./ui/EmptySquare";
import FilledSquare from "./ui/FilledSquare";

/* ({ value, flipAnimated, key, stage, successAnimated} */
function Letrix() {
  const [change,setChange] = useState(false)
  return (
    <div style={{width:'30px'}}>
      <AnimatedItem value={'a'} key={0} id={0} stage={2} flipAnimated={false} successAnimated={false}></AnimatedItem>
      <button onClick = {()=>setChange(!change)}>aaa</button>
    </div>
  );
}

export default Letrix;
