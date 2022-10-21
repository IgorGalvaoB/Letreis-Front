import Letreis from './Letreis.js';
import Themes from './ui/styles/Themes.js';
import { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const ThemeContext = createContext({})

const ToggleThemeLetrix = () => {
    const [selectedTheme, setSelectedTheme] = useState(Themes.lightTheme)

    const toggleTheme = () => {
        setSelectedTheme((preTheme) => preTheme.palette.mode === 'dark' ? Themes.lightTheme : Themes.darkTheme)
    }
    const theme = createTheme(selectedTheme)


    return (
        <ThemeContext.Provider value={toggleTheme}>
            <ThemeProvider theme={theme}>
                <Letreis></Letreis>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ToggleThemeLetrix