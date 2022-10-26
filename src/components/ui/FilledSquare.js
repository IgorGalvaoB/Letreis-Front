import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const FilledSquare = ({ successBackground, letter })=>{
    const theme = useTheme()
    
    const backgroundColor = ()=>{
       
        switch(successBackground){

            case 1: return theme.palette.warning.main;
        
            case 2: return theme.palette.success.main;
                    
            default: return theme.palette.secondary.main;

        }
    }
   
    const StyBox = styled(Box)(({ theme })=>({
        
        transform:'rotateY(90deg) translateX(50%) rotateY(90deg)' ,
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: `${backgroundColor()}`,
        opacity: '1',
        borderRadius:theme.shape.borderRadius *3.5,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        aspectRatio:'1/1',
        color:'white',
        [theme.breakpoints.down('lsm')]:{
            
            borderRadius: theme.shape.borderRadius * 3,

        },
        [theme.breakpoints.down('sm')]:{

            borderRadius: theme.shape.borderRadius * 2,

        },

    }))
   
    return(

        <StyBox>
            <Typography variant='h2'>
                {letter}
            </Typography>
        </StyBox>

    )
}

export default FilledSquare