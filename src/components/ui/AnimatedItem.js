import { styled } from '@mui/material/styles';
import { keyframes, Box } from '@mui/material';
import EmptySquare from './EmptySquare.js';
import InputSquare from './InputSquare.js';
import FilledSquare from './FilledSquare.js'

const AnimatedItem = ({ value, flipAnimated, id, stage, successAnimated }) => {

    const delayTime = id * 0.7
    const animated = flipAnimated || successAnimated

    
    const flipAnimation = keyframes`
    
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
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
    }
    100%{
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
    }
    
    `
    const animation = ()=>{
        if(animated){
            return flipAnimated?flipAnimation:successAnimation
        }
        return ''
    }
    
    const ContainerBox = styled(Box)(() => ({

        width: '100%',
        aspectRatio: '1/1',
        position:'relative',
        transformStyle: 'preserve-3d',
        animation: animated?`${animation()} 0.7s ${delayTime}s linear both`:'',
        'z-index': 1,

    }))

    const StageOne = () => {
        return stage===1?(
            <ContainerBox>
                <EmptySquare />
            </ContainerBox>
        ):<></>
    }
    const StageTwo = () => {
        return stage===2?(
            <ContainerBox>
                <InputSquare id={id} value={null} />
            </ContainerBox>
        ):<></>
    }
    const StageThree = () => {

        return stage===3?(
            <ContainerBox>
                <InputSquare id={id} value={value[0]}/>
                <FilledSquare stage={stage} value={value[0]} success={value[1]}/>
            </ContainerBox>
        ):<></>
    }
    
    const StageFour = () => {

        return stage===4?(
            <ContainerBox>
                <FilledSquare stage={stage} value={value[0]} success={value[1]}/>
            </ContainerBox>
        ):<></>
    }


    const Container = styled(Box)(() => ({

        position: 'relative',
        width: '100%',
        aspectRatio: '1/1',
        perspective: '250px',

    }))

    return (
        <>
            <StageOne />
            <StageTwo />
            <StageThree />
            <StageFour />
        </>
    )
}
export default AnimatedItem