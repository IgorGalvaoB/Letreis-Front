import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FilledSquare = ({value , stage , success})=>{
    const theme = useTheme()
    let backGroundColor = null
    const fliped = stage === 3
    console.log(stage)
    const backGroundFunc = ()=>{
       
        switch(success){
            case 1: backGroundColor = theme.palette.warning.main;
                    break;
            case 2: backGroundColor = theme.palette.success.main;
                    break;
            default: backGroundColor = theme.palette.secondary.main;
                    break;
        }
    }

    backGroundFunc()

   
    const StyBox = styled(Box)(({ theme })=>({
        
        transform:'rotateX(180deg)',
        backgroundColor: `${backGroundColor}`,
        opacity: '1',
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        aspectRatio:'1/1',

    }))
    const StyTypography = styled(Typography)(({ theme })=>({

    }))
    return(
        <StyBox>
            <StyTypography>{value}</StyTypography>
        </StyBox>
    )
}

export default FilledSquare