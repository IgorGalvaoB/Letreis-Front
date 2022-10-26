import { useState, useEffect } from 'react'
/* import { useTheme, styled, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'; */
import EmptySquare from './EmptySquare.js';
import InputSquare from './InputSquare.js';
import FilledSquare from './FilledSquare.js';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';


const Cube = ({ deg, id, word, backWord, select, setSelect, success }) => {
   
    

    const jump = keyframes`
        0% {
            transform: translateY(0%) ;
        }
        45% {
            transform: translateY(-40%) ;
        }
        90%{
            transform: translateY(0%) scale(100%) ;
        }
        100%{
            transform: translateY(0%) scale(111%) 

        }
    `;

    const RotatedBox = styled(Box)({

        width: '100%',
        aspectRatio: '1/1',
        animation: success[0]&&`${jump} ${0.7}s ${(0.1 * id)+1.9}s both`,
        transformStyle: 'preserve-3d',

    });

    const motherDiv = {

        width: '100%',
        aspectRatio: '1/1',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${deg}deg)`,
        aspectRatio: '1/1',
        transition: `0.5s ${0.3 * id}s`,

    }

    return (
        <div style={{ perspective: '500px', width: '100%' }}>
            <div style={{ ...motherDiv }}>
                <RotatedBox>
                    <EmptySquare />
                    <InputSquare setSelect={() => setSelect(id)} id={id} letter={word[id]} select={select} />
                    <FilledSquare  successBackground={backWord[id][1]} letter={backWord[id][0]}/>
                </RotatedBox>
            </div>
        </div>
    )
}
export default Cube