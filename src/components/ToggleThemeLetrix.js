import Letrix from './Letrix.js';
import Themes from './styles/Themes.js';
import { createContext, useState, useMemo } from 'react';
import  { createTheme, ThemeProvider }  from '@mui/material/styles';


export const ThemeContext = createContext({})

const ToggleThemeLetrix = () => {
    const [selectedTheme, setSelectedTheme] = useState(Themes.lightTheme)
    

    const toggleTheme = () => {
        setSelectedTheme((preTheme) => preTheme.palette.mode === 'dark' ? Themes.lightTheme : Themes.darkTheme)
    }
    const  theme = createTheme(selectedTheme)
        
    
    return (
        <ThemeContext.Provider value={toggleTheme}>
            <ThemeProvider theme={theme}>
                <Letrix></Letrix>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ToggleThemeLetrix