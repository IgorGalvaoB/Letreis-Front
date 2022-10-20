const Themes = {
    lightTheme: {
        palette: {
            mode: 'light',
            primary: {
                main: '#635C51',
            },
            secondary:{
                main:'#7D7461',
            },
            background: {
                default: '#B0A990',
            },
        },
        shape:{
            border:{
                main:'6px solid',
                md:'4px solid',
                mainDouble:'12px solid',
                mdDouble:'8px solid',
            }
        }
    },

    darkTheme: {
        palette: {
            mode: 'dark',
            primary: {
                main: '#'
            },
            background: {
                default: '#',
            },
            borderColor:{
                main:'#'
            }
        },
        shape:{
            border:{
                main:'6px solid',
                md:'4px solid',
                mainDouble:'12px solid',
                mdDouble:'8px solid',
            }
        }
    }
}

export default Themes