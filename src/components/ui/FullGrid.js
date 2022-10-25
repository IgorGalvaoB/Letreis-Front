import { useEffect,useState } from "react";
import GridWord from "./GridWord";
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

const ATTEMPTS_NUMBER = 8

const FullGrid = ()=>{
        const [rotation,setRotation] = useState(new Array(ATTEMPTS_NUMBER).fill().map((item,index)=>{
            return index===0?0:90
        }))
        const arrWords = rotation.map((item,index)=>{
            return (
                <GridWord key={index} rotation={0}></GridWord>
            )
        })
        
       /*  if(attempts.uno.day){
            
            let today = new Date().toLocaleString("en-US", {
                timeZone: "America/Fortaleza"
            });
            today = new Date(today)
            const changeDay = (today - new Date()).getDate()
            if(!changeDay){
                if(attempts.uno.arr){
                    attempts.uno.arr.forEach((element,index) => {
                        arrWords.push(<GridWord savedWord={element} rotation={180} key={index}></GridWord>)
                    });

                    for(let i=0;i<ATTEMPTS_NUMBER-attempts.uno.arr.lenght;i++){
                        arrWords.push(<GridWord id={ATTEMPTS_NUMBER+i+1} key={ATTEMPTS_NUMBER+i+1}></GridWord>)
                    }
                }
            }
        }else{ */
        
            
        //}
    //},[])


    return(
        <Container maxWidth='lsm'>
            <Grid container columns={1} sx={{width:'100%'}} rowSpacing={{xs:1.5}}>
                {arrWords}
            </Grid>
        </Container>
    )
}
export default FullGrid