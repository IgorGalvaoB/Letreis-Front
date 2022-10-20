import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const EmptySquare = ()=>{
    
    const StyBox = styled(Box)(({ theme }) => ({
          
        backgroundColor: 'black',
        opacity: '0.7',
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'relative',
        width: '100px',
        aspectRatio:'1/1',
    
    }))

    return(
       <StyBox></StyBox> 
    )

}
export default EmptySquare

