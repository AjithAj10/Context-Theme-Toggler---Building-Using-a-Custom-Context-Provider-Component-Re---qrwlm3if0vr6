import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {

     const {theme} = useContext(ThemeContext);
    // console.log(theme);

    const [localTheme,setLocalTheme] = useState(theme);
    useEffect(() => {
        console.log('Helo');
        setLocalTheme(theme);
    },[theme])

     const [localBtn,setLocalBtn] = useState('Toggle local theme to dark')

    let localThemefn = () => {
        if(localBtn === 'Toggle local theme to dark'){
            // theme = 'dark';
           setLocalTheme('dark');
            setLocalBtn('Toggle local theme to light');
        }else{
            // theme = 'light';
            setLocalTheme('light');
            setLocalBtn('Toggle local theme to dark');
        }
    }
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={'bg-'+localTheme}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={'txt-'+localTheme}>hello</p>
        <button id="local-theme-toggler" onClick={localThemefn} className={'btn btn-'+localTheme}>{localBtn}</button>
    </div>
)
}

export { LocalThemedBox }