import React, { useState } from 'react';

let ThemeContext = React.createContext()

const ThemeProvider = ({children,value}) =>{

    const [theme,setTheme] = useState('light');
    //ThemeContext = React.createContext({theme,setTheme});
   // console.log('Themeprovider' + theme);
    return (
        <React.Fragment>
            <ThemeContext.Provider value={{theme,setTheme}}>
                {children}
            </ThemeContext.Provider>

        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}