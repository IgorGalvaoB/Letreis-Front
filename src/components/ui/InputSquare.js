import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useMemo } from 'react';


const InputSquare = ( { select, id, letter } )=>{
    
    const selected = select === id

    const StyBox = styled(Box)(({ theme }) => ({
        boxSizing:'border-box',
        backgroundColor: theme.palette.background.default,
        border: theme.shape.border.main,
        borderBottom:selected?theme.shape.border.mainDouble:theme.shape.border.main,
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        aspectRatio:'1/1',
        transform:'translateX(-50%) rotateY(-90deg)',
        [theme.breakpoints.down('md')]:{

            border:theme.shape.border.md,
            borderBottom:selected?theme.shape.border.mdDouble:theme.shape.border.md,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius * 1.2,

        }
    
    }))

    return(

        <StyBox><Typography variant='h2'>{letter}</Typography> </StyBox>

    )
}

export default InputSquare



