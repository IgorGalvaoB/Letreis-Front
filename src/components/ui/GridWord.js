import { useState, useLayoutEffect, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Cube from './Cube';

const NUMBER_OF_LETTERS = 6

const GridWord = ({ rotation, id, word, result,select,setSelect,backWord }) => {
    const [thisWord, setThisWord] = useState(new Array(NUMBER_OF_LETTERS).fill(''))
    const [position, setPosition] = useState(0)
    const [count,setCount] =useState(0)


    
    useEffect(() => {
        if (rotation === 90) {
            setThisWord(word)
        }

    }, [word])




    useLayoutEffect(() => {
        
        if (rotation !== 90) return
        if(count===0){
            setCount(1)
            return
        }
        let counter = 0
        const interval = setInterval(() => {
            counter++
            if (counter % 2 === 0) {
                setPosition(7)
            } else {
                setPosition(-7)
            }

            if (counter === 15) {
                setPosition(0)
                clearInterval(interval)
            }
        }, 20)
    }, [result])




    const wordGrid = word.map((item, index) => {
        return (

            <Grid xs={1} key={index}>
                <Cube word={thisWord}  backWord={backWord.slice(0,6)}  select={select} deg={rotation} id={index} setSelect={setSelect}  success={backWord.slice(-1)} ></Cube>
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
    
}

export default GridWord