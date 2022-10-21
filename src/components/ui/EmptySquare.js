import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const EmptySquare = ()=>{
    
    const StyBox = styled(Box)(({ theme }) => ({
          
        backgroundColor: 'black',
        opacity: '0.7',
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100px',
        aspectRatio:'1/1',
        transform: 'rotateY(-90deg) translateX(50%) rotateY(90deg)'
    
    }))

    return(
       <StyBox/> 
    )

}
export default EmptySquare

