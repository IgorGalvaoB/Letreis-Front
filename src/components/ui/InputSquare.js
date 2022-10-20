import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import { useContext } from 'react';
//import { Values } from './ContainerGrid.js'

const InputSquare = ({ value, id })=>{
    //const { word, select, selectFunc } = useContext(Values) 
    const letter = value//||word[id]
    const selected = false//select === id
    

    /* const handleClick = ( )=>{

        selectFunc(key)

    } */

    const StyBox = styled(Box)(({ theme }) => ({
              
        backgroundColor: theme.palette.background.default,
        border: theme.shape.border.main,
        borderBottom:selected?theme.shape.border.mainDouble:theme.shape.border.md,
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        aspectRatio:'1/1',
        [theme.breakpoints.down('md')]:{
            border:theme.shape.border.md,
            borderBottom:selected?theme.shape.border.mdDouble:theme.shape.border.md,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius * 1.2,
        }
    
    }))
    const StyTypography = styled(Typography)(({ theme }) => ({

    }))
    return(

        <StyBox>
            <StyTypography>
                {letter}
            </StyTypography>
        </StyBox>

    )
}

export default InputSquare



