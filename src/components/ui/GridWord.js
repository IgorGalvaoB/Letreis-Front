import { useState, useLayoutEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import validateWord from '../../controllers/validateWord.controller';
import Cube from './Cube';

const NUMBER_OF_LETTERS = 6

const GridWord = ({ rotation, id, savedWord }) => {
    const [word, setWord] = useState(new Array(NUMBER_OF_LETTERS).fill(''))
    const [backWord, setBackWord] = useState(new Array(NUMBER_OF_LETTERS).fill(['', 2]))
    const [position, setPosition] = useState(0)
    const [select, setSelect] = useState(0)
    const [success, setSuccess] = useState(false)
    
    
    useLayoutEffect(()=>{
        if(savedWord)(
            setBackWord(savedWord)
        )
    },[])

    


    const wordGrid = word.map((item, index) => {
        return (

            <Grid xs={1} key={index}>    
                <Cube word={word} backWord={backWord} select={select} deg={rotation} id={index} setSelect={setSelect} success={success}></Cube>
            </Grid>
        )

    })


    return (
        <Grid xs={1}>
            <div style={{ width: '100%', transform: `translateX(${position}px)` }}>
                <Grid container spacing={{ xs: 1.8, sm: 2.8, lsm: 3.2 }} columns={NUMBER_OF_LETTERS}>
                    {wordGrid}
                </Grid>
            </div>
        </Grid>

    )
{/* <button style={{ marginTop: '50px' }} onClick={()=>validateWord(rotation,setPosition)}>change</button>
<button style={{ marginTop: '50px' }} onClick={() => setSuccess(!success)}>change</button> */}
}

export default GridWord