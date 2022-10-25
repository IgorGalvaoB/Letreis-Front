import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const EmptySquare = ()=>{
    
    const StyBox = styled(Box)(({ theme }) => ({
          
        backgroundColor: theme.palette.secondary.main,
        opacity: '0.7',
        borderRadius: theme.shape.borderRadius * 3.5,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        aspectRatio:'1/1',
        transform:'rotateY(-90deg) translateX(50%) rotateY(90deg)',
        [theme.breakpoints.down('lsm')]:{
            
            borderRadius: theme.shape.borderRadius * 3,

        },
        [theme.breakpoints.down('sm')]:{

            borderRadius: theme.shape.borderRadius * 2,

        },
    
    }))

    return(
       <StyBox/> 
    )

}
export default EmptySquare

