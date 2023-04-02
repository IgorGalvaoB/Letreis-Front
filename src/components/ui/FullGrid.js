import { useEffect, useState, forwardedRef, useContext } from "react";
import GridWord from "./GridWord";
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import validateWord from "../../controllers/validateWord.controller";
import animationController from "../../controllers/animations.controller";
import { forwardRef } from "react";
import { ThemeContext } from "../ToggleThemeLetrix";
const ATTEMPTS_NUMBER = 8

const FullGrid = forwardRef((props, ref) => {

    const [rotation, setRotation] = useState(new Array(ATTEMPTS_NUMBER).fill().map((item, index) => index === 0 ? 90 : 0))
    const [backWords, setBackWords] = useState(new Array(ATTEMPTS_NUMBER).fill().map(element => [['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], false]))
    const [select, setSelect] = useState(0)
    const [valid, setValid] = useState(false)
    const [word, setWord] = useState(['', '', '', '', '', ''])
    const [commands, setCommands] = useState(true)
    const [current, setCurrent] = useState(0)
    const [won, setWon] = useState(false)

    const arrWords = rotation.map((item, index) => {
        return (
            <GridWord key={index} result={valid} word={word} rotation={rotation[index]} select={select} setSelect={setSelect} backWord={backWords[index]}></GridWord>
        )
    })


    const handleKeyDown = async (e) => {
   
        if (!commands || won) return

        if (e.keyCode === 8) {
           
            const auxWordDel = [...word]
            if (select >= 5 || select === null) {
                console.log('aki')
                auxWordDel[5] = ''
                setWord([...auxWordDel])
                setSelect(4)
                return

            } else if (select === 0) {
                auxWordDel[0] = ''
                setWord(auxWordDel)
                setCommands(true)
                return
            } else {
                auxWordDel[select] = ''
                setSelect(select - 1)
                setWord(auxWordDel)
                setCommands(true)
                return
            }
        }
        if (e.keyCode <= 90 && e.keyCode >= 65) {

            if (select === null) return
            const auxWord = [...word]
            if (select >= 0 && select < 5) {
                auxWord[select] = e.key.toUpperCase()
                setSelect(select + 1)
                setWord([...auxWord])
                setCommands(true)
            } else if (select === 5) {
                setSelect(null)
                auxWord[5] = e.key.toUpperCase()
                setWord([...auxWord])
                console.log(select)
            }

        }
        if (e.keyCode === 13) {
            setCommands(false)

            const returned = await validateWord(word.join(''), setCommands, setWon)

            if (returned) {
                await animationController(backWords, setBackWords, rotation, setRotation, setWord, current, setCurrent, returned)
                setSelect(0)
                setTimeout(() => {
                    setCommands(true)
                }, 2100)
                return
            } else {
                setValid(!valid)
                setCommands(true)
            }
        }
        if (e.keyCode === 39) {
            if (select >= 5) return
            if (select === null) {
                setSelect(0)
                return
            }
            setSelect(select + 1)
            setCommands(true)

        }
        if (e.keyCode === 37) {
            if(select===0)return

            if (select > 5 || select === null) {
                setSelect(5)
                setCommands(true)
                return
            }else{
                setSelect(select - 1)
                setCommands(true)
            }


        }
        if (e.keyCode === 32) {
            if (select >= 5) return
            setSelect(select + 1)
            setCommands(true)
        }
        setCommands(true)
        return
    }



    return (
        <Container ref={ref} maxWidth='sm' sx={{ outline: 'none', marginTop: '5px' }} tabIndex='-1' onKeyDown={handleKeyDown}>
            <Grid container columns={1} sx={{ width: '100%' }} rowSpacing={{ xs: 1 }}>
                {arrWords}
            </Grid>
        </Container>
    )
})
export default FullGrid
