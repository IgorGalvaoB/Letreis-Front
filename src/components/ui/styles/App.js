import { Box, Typography, Avatar } from '@mui/material';
import { useTheme, styled, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useState } from 'react';


const App = () => {

    const [px, setPx] = useState(80)
    const theme = useTheme()
    const [deg, setDeg] = useState(0)
    const FrontBox = styled(Box)(({ theme }) => ({

        backgroundColor: 'black',
        opacity: '0.7',
        border: '3px solid black',
        borderRadius: '5px',
        boxSizing: 'border-box',
        color: 'white',
        position: 'absolute',
        width: '100%',
        aspectRatio: '1/1',
        transform: 'rotateY(-90deg) translateX(50%) rotateY(90deg)',
        backfaceVisibility: 'hidden',

    }))
    const RightBox = styled(Box)(({ theme }) => ({
        backgroundColor: 'rgba(120, 170, 51, .5)',
        opacity: '1',
        border: '3px solid black',
        borderRadius: '5px',
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        aspectRatio: '1/1',
        transform: 'translateX(-50%) rotateY(-90deg)',
        backfaceVisibility: 'hidden',

    }))
    const BackBox = styled(Box)(({ theme }) => ({
        backgroundColor: 'red',
        opacity: '0.7',
        border: '3px solid black',
        borderRadius: '5px',
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        aspectRatio: '1/1',
        transform: 'rotateY(90deg) translateX(50%) rotateY(90deg)',
        backfaceVisibility: 'hidden',

    }))

    const MotherBox = styled(Box)(({ theme }) => ({

        position: 'relative',
        width: '20px',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${deg}deg)`,
        aspectRatio: '1/1',
        transition:'2s',

    }))
    

    const Right = () => {
        return (
            <div styles={{
                position: 'absolute',
                width: '100%',
                backgroundColor: 'blue',
                transform: 'rotateY(90deg)',
                aspectRatio: '1/1',
            }}></div>
        )
    }
    const Div = {

        width: '40px',
        aspectRatio:'1/1',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${deg}deg)`,
        aspectRatio: '1/1',
        transitionDuration: '0.7s',
        
    }

    let motherDiv = {
        width: '100%',
        height: '100%',

        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${deg}deg)`,
        transition: '2s'
    }

    const LeftDiv = styled(Box)(() => ({
        backgroundColor: 'blue',
        opacity: '0.7',
        border: '3px solid black',
        borderRadius: '5px',
        boxSizing: 'border-box',
        position: 'absolute',
        width: '100%',
        aspectRatio: '1/1',
        transform: 'translateX(50%) rotateY(90deg)',
        backfaceVisibility: 'hidden',
    }))

    return (
        <>
            <MotherBox>

                <RightBox></RightBox>
                <FrontBox></FrontBox>
                <BackBox></BackBox>
            </MotherBox> 

            <div style={{
                width: '100px',
                height: '100px',
                perspective: '300px',
                transition: '1s',
                marginBottom:'300px'
            }}>
                <div style={{ ...Div, boxSizing: 'border-box' }}>
                    <RightBox></RightBox>
                    <FrontBox></FrontBox>
                    <BackBox></BackBox>
                    <LeftDiv></LeftDiv>
                </div>
            </div>

            <div style={{
                width: '30px',
                height: '30px',
                perspective: '80px',
                marginBottom:'100px'
            }}>
            <div style={{ ...motherDiv,transition:'0.7s 0.2s', boxSizing: 'border-box'}}>
                <RightBox></RightBox>
                <FrontBox></FrontBox>
                <BackBox></BackBox>
                <LeftDiv></LeftDiv>
            </div>
            </div>
            <button onClick={() => setDeg(deg + 90)}>Rodar</button>

        </>
    )
}
export default App