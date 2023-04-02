import { useEffect } from "react";
import { useRef } from "react";
import FullGrid from "./ui/FullGrid";
import AppBar from '@mui/material/AppBar';

function Letreis() {
  const ref = useRef(null)
  useEffect(() => {
    ref.current.focus()
  }, [])

  const handleClick = () => {
    ref.current.focus()
  }
  return (
    <>
      
      <div style={{ width: '100%', height: '100%' }} onClick={handleClick} >
        <AppBar position="static" color="primary">
          <div style={{ height: '60px' }}></div>
        </AppBar>
        <FullGrid ref={ref}></FullGrid>
      </div>
    </>

  );
}

export default Letreis;
