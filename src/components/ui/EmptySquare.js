import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const EmptySquare = ()=>{
    
    const emptySquare = styled(Box)(({ theme }) => ({
          
        backgroundColor: theme.palette.secondary.main,
        opacity: '0.7',
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        aspectRatio:'1/1',
    
    }))

    return(
        <emptySquare></emptySquare>
    )

}
export default EmptySquare

