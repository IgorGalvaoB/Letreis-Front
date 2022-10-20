import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import { useContext } from 'react';
//import { Values } from './ContainerGrid.js'

const InputSquare = ({ value, key, stage})=>{
    const { word, select, selectFunc } = useContext(Values) 
    const letter = value||word[key]
    const selected = select === key
    const flip = stage !== 2 

    const handleClick = ( )=>{

        selectFunc(key)

    }

    const inputSquare = styled(Box)(({ theme }) => ({
              
        transform: flip&&'rotateX(180deg)',
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
    
    return(

        <inputSquare onClick={handleClick}>
            {letter}
        </inputSquare>

    )
}



