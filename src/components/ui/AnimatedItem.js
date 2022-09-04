import { useMemo } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { keyframes, Box } from '@mui/material'
import EmptySquare from './EmptySquare.js'
const AnimatedItem = ({ isAnimated, key, delay, stage, successAnimated}) => {

    const theme = useTheme()
    const delayTime = key*0.7 
    
    const ContainerBox = styled(Box)(() => ({

        width: '100%',
        aspectRatio:'1/1',
        transformStyle: 'preserve-3d',
        animation: isAnimated&&`${flipAnimation} 0.7s ${delayTime}s linear both`,
        animation: successAnimated&&`${successAnimation} 0.7 linear both`,
        'z-index': 1,

    }))
    
    const stageOne = ()=>{
        return (
            <ContainerBox>
                <EmptySquare/>
            </ContainerBox>
        )
    }
    const stageTwo = ()=>{
        return(
            <ContainerBox>
                <EmptySquare/>
                <InputSquare/>
            </ContainerBox>
        )
    }
    const stageThree = ()=>{
        return(
            <ContainerBox>
                <InputSquare/>
                <FilledSquare/>
            </ContainerBox>
        )
    }
    const stageFour = ()=>{
        <ContainerBox>
            <FilledSquare/>
        </ContainerBox>
    }

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
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
        50%{
            -webkit-transform: translateY(20px);
            transform: translateY(20px);
        }
        100%{
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
        }
    
    `
    

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
export default AnimatedItem