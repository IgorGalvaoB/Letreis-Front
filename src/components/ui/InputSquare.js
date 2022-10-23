import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import { styled } from '@mui/material/styles';



const InputSquare = ( { select, id, letter,setSelect } )=>{
    
    const selected = select === id

    const StyBox = styled(Box)(({ theme }) => ({

        boxSizing:'border-box',
        cursor:'pointer',
        backgroundColor: theme.palette.background.default,
        border: theme.shape.border.md,
        borderBottom:selected?theme.shape.border.md2:theme.shape.border.md,
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius * 3.5,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        width: '100%',
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:'100%',
        transform:'translateX(-50%) rotateY(-90deg)',

        [theme.breakpoints.down('lsm')]:{

            border:theme.shape.border.xsm,
            borderBottom:selected?theme.shape.border.lsm2:theme.shape.border.lsm,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius * 3,

        },

        [theme.breakpoints.down('sm')]:{

            border:theme.shape.border.xs,
            borderBottom:selected?theme.shape.border.xs2:theme.shape.border.xs,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius * 2,

        },
    
    }))

    return(

        <StyBox onClick={setSelect}>
            <Typography variant='h2'>
                {letter}
            </Typography>
        </StyBox>

    )
}

export default InputSquare



