import { useTheme, styled, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import EmptySquare from './EmptySquare.js';
import InputSquare from './InputSquare.js';
import FilledSquare from './FilledSquare.js';

const Cube = ( { deg, id, word, backWord, select } )=>{
   

    const StyBox = styled(Box)(({ theme }) => ({
          
        borderRadius: theme.shape.borderRadius * 1.2,
        width: '100px',
        aspectRatio:'1/1',
        transform: `rotateY(${deg}deg)`,
    
    })) 
    

    const motherDiv = {

        width: '100%',
        aspectRatio:'1/1',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${deg}deg)`,
        aspectRatio: '1/1',
        transition: `0.55s ${0.3*id}s`,
        
    }
   
    return (
       
        <div style={{...motherDiv}}>
            <EmptySquare/>
            <InputSquare id={id} letter={word[id]} select={select}/> 
            <FilledSquare success={backWord[id][1]} letter={backWord[id][0]}/>
        </div>

    )
}
export default Cube