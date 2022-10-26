import { useEffect, useState, forwardedRef, useContext } from "react";
import GridWord from "./GridWord";
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import validateWord from "../../controllers/validateWord.controller";
import animationController from "../../controllers/animations.controller";
import { forwardRef } from "react";
import { ThemeContext } from "../ToggleThemeLetrix";
const ATTEMPTS_NUMBER = 8

const FullGrid = forwardRef((props,ref) => {
    const context = useContext(ThemeContext)
    const [rotation, setRotation] = useState(new Array(ATTEMPTS_NUMBER).fill().map((item, index) => {
        return index === 0 ? 90 : 0
    }))
    const [select,setSelect] = useState(0)
    const [valid, setValid] = useState(false)
    const [word, setWord] = useState(['', '', '', '', '', ''])
    const [commands, setCommands] = useState(true)
    
    const [backWords,setBackWords] = useState(new Array(8).fill().map(element=>[['',0],['',0],['',0],['',0],['',0],['',0],false]))
 
    const [current,setCurrent] = useState(0)
    const arrWords = rotation.map((item, index) => {
        return (
            <GridWord key={index} result={valid} word={word} rotation={rotation[index]} select={select} setSelect={setSelect} backWord={backWords[index]}></GridWord>
        )
    })
    
    const handleKeyDown = async (e) => {
        if(!commands)return
       
        if(e.keyCode === 8){
            const auxWordDel = word
            if(select>5){
                auxWordDel[5] = ''
                setSelect(4)

            }else{
                auxWordDel[select] = ''
                setSelect(select-1)
                setWord(auxWordDel)
            }
        }
        if(e.keyCode <= 90&& e.keyCode>=65){
            if(select >5) return
            const auxWord = word
            auxWord[select] = e.key.toUpperCase()
            setSelect(select+1)
            setWord(auxWord)
            
        }
        if(e.keyCode ===13){
            const returned = await validateWord(word.join(''),setCommands)
        
            if(returned){
                
                await animationController(backWords,setBackWords,rotation,setRotation,word,setWord,current,setCurrent,returned)
                setSelect(0)
            }else{
                setValid(!valid)
            }
        }
        
        setCommands(true)
    }



    return (
        <Container ref={ref} maxWidth='lsm' tabIndex='-1' onKeyDown={handleKeyDown}>
            <Grid container columns={1} sx={{ width: '100%' }} rowSpacing={{ xs: 1.5 }}>
                {arrWords}
            </Grid>
            <button onClick={context}>dfasdfasdfasdfasdf</button>
        </Container>
    )
})
export default FullGrid
