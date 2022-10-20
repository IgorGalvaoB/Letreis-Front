import { styled } from '@mui/material/styles';
import { keyframes, Box } from '@mui/material';
import EmptySquare from './EmptySquare.js';
import InputSquare from './InputSquare.js';
import FilledSquare from './FilledSquare.js'

const AnimatedItem = ({ value,flipAnimated, key, delay, stage, successAnimated}) => {

    const delayTime = key*0.7 
    
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
    
    const ContainerBox = styled(Box)(() => ({

        width: '100%',
        aspectRatio:'1/1',
        transformStyle: 'preserve-3d',
        animation: flipAnimated&&`${flipAnimation} 0.7s ${delayTime}s linear both`,
        animation: successAnimated&&`${successAnimation} 0.7s ${delayTime}s linear both`,
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
                <InputSquare key={key} value={null}/>
            </ContainerBox>
        )
    }
    const stageThree = ()=>{
        return(
            <ContainerBox>
                <InputSquare key={key} value={value[0]}/>
                <FilledSquare stage={3} value={value[0]} success={value[1]} key={key}/>
            </ContainerBox>
        )
    }
    const stageFour = ()=>{
        <ContainerBox>
            <FilledSquare stage={4} value={value[0]} success={value[1]} key={key}/>
        </ContainerBox>
    }


/*     const Container = styled(Box)(() => ({
        
        position: 'relative',
        width: '100%',
        aspectRatio:'1/1',
        perspective: '250px',

    })) */

    return (
        <>
            {stage===1&&<stageOne/>}
            {stage===2&&<stageTwo/>}
            {stage===3&&<stageThree/>}
            {stage===4&&<stageFour/>}
        </>
    )
}
export default AnimatedItem