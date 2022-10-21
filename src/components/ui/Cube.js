import { useTheme, styled, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import EmptySquare from './EmptySquare.js';
import InputSquare from './InputSquare.js';
import FilledSquare from './FilledSquare.js'

const Cube = ( { deg, id, word } )=>{

    const StyBox = styled(Box)(({ theme }) => ({
          
        backgroundColor: 'black',
        borderRadius: theme.shape.borderRadius * 1.2,
        width: '100%',
        aspectRatio:'1/1',
        transform: `rotateY(${deg}deg)`,
    
    }))
    
    return (
        
            <StyBox>
                
                <EmptySquare/>
                <FilledSquare success={0}> 
                    <Typography variant='h3'>A</Typography>
                </FilledSquare>
                <InputSquare> 
                    <Typography variant='h3'>A</Typography> 
                </InputSquare>
            </StyBox>
 
       
    )
}
export default Cube