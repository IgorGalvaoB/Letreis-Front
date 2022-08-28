import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const BasicSquare = ({value,color})=>{

    const Square = styled(Box)(()=>({
        width:'100%',
        aspectRatio:'1/1',
        backgroundColor:color,
    })) 

    const StyTypography = styled(Typography)(({theme})=>({
        color:theme[palette].common[0],
    }))
    
    return(
        <Square>
            <StyTypography>
                {value}
            </StyTypography>
        </Square>
    )
}