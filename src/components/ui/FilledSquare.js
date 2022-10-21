import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FilledSquare = ({ success })=>{
    const theme = useTheme()
    
    const backGroundFunc = ()=>{
       
        switch(success){

            case 1: return theme.palette.warning.main;
        
            case 2: return theme.palette.success.main;
                    
            default: return theme.palette.secondary.main;

        }
    }

    

   
    const StyBox = styled(Box)(({ theme })=>({
        
        transform:'rotateY(-90deg) translateX(-50%) rotateY(90deg)',
        backgroundColor: `${backGroundFunc()}`,
        opacity: '1',
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        aspectRatio:'1/1',

    }))
   
    return(
        <StyBox/>
    )
}

export default FilledSquare