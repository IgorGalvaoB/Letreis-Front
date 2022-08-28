import { useMemo } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { keyframes, Box } from '@mui/material'



const EmptySquare = ({ isAnimated, id }) => {
    const theme = useTheme()
    const animation = keyframes`
        0% {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
        },
        100%{
            -webkit-transform: rotateX(180deg);
            transform: rotateX(180deg);
        },
    `
    
    const EmptySquare = styled(Box)(({ theme }) => ({
        boxSizing: 'border-box',
        backgroundColor: theme.palette.secondary.main,
        opacity: '0.7',
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        height: '100%',
        width: '100%',
    }))

    const EmptySquareBack = styled(Box)(({ theme }) => ({
        boxSizing: 'border-box',
        display: 'block',
        transform: 'rotateX(180deg)',
        backgroundColor: theme.palette.background.default,
        border: theme.shape.border.main,
        borderColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius * 1.2,
        backfaceVisibility: 'hidden',
        position: 'absolute',
        opacity: '1',
        height: '100%',
        width: '100%',
        [theme.breakpoints.down('md')]:{
            border:theme.shape.border.md,
            borderColor: theme.palette.secondary.main,
            borderRadius: theme.shape.borderRadius * 1.2,
        }
    }))
    const ContainerBox = styled(Box)(() => ({
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        animation: isAnimated&&`${animation} 0.7s ${id * 0.7}s linear both`,
        'z-index': 1,
    }))
    const Container = styled(Box)(() => ({
        position: 'relative',
        width: '50px',
        height: '50px',
        perspective: '300px',
    }))
    return (
        <Container>
            <ContainerBox>
                <EmptySquare>
                </EmptySquare>
                <EmptySquareBack>
                </EmptySquareBack>
            </ContainerBox>
        </Container>
    )
}
export default EmptySquare