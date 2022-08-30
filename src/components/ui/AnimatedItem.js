import { useMemo } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { keyframes, Box, Typography } from '@mui/material'



const EmptySquare = ({ isAnimated, key, delay, stage}) => {

    const theme = useTheme()
    const time = delay||key*0.7 

    const stageOne = ()=>{}
    const stageTwo = ()=>{}
    const stageThree = ()=>{}
    const stageFour = ()=>{}

    const flipAnimation  = keyframes`
        0% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
        },
        100%{
            -webkit-transform: rotateX(180deg);
            transform: rotateX(180deg);
        },
    `
    const successAnimation = keyframes`
        0%{

        }
        50%{

        }
        100%{

        }
    
    `
    
    const ContainerBox = styled(Box)(() => ({

        width: '100%',
        aspectRatio:'1/1',
        transformStyle: 'preserve-3d',
        animation: isAnimated&&`${animation} 0.7s ${time}s linear both`,
        'z-index': 1,

    }))

    const Container = styled(Box)(() => ({
        
        position: 'relative',
        width: '100%',
        aspectRatio:'1/1',
        perspective: '250px',

    }))

    return (
        <Container>
            <ContainerBox>
                <Face/>
                <Back/>
            </ContainerBox>
        </Container>
    )
}
export default EmptySquare