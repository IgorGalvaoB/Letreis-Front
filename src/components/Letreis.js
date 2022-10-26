
import { useEffect } from "react";
import { useRef } from "react";
import FullGrid from "./ui/FullGrid";

function Letreis() {
  useEffect(() => {

    ref.current.focus()
    console.log(ref)
  }, [])
  const handleClick = () => {
    ref.current.focus()
  }
  const ref = useRef(null)
  return (
    <div style={{ width: '100vw', height: '99vh'}} onClick={handleClick} >
      <FullGrid ref={ref}></FullGrid>
    </div>

  );
}

export default Letreis;
