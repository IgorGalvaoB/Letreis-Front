import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles'


const InputSquare = ( { select, id } )=>{

    const selected = select === id

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
        transform:'rotateY(-90deg) translateX(50%)',
        [theme.breakpoints.down('md')]:{

            border:theme.shape.border.md,
            borderBottom:selected?theme.shape.border.mdDouble:theme.shape.border.md,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius * 1.2,

        }
    
    }))

    return(

        <StyBox/>

    )
}

export default InputSquare



