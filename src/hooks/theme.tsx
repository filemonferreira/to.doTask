import React,{
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect
} from 'react';

interface ThemeProviderProps{
    children: ReactNode;
}

interface ThemeContextData {
    theme: string;
    handleThemeChange(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState('Dark');

    function handleThemeChange(): void{
       if(theme === 'Light'){
           setTheme('Dark');
       }else{
           setTheme('Light')
       }
       console.log('bae: ', theme)
     }

    return(
        <ThemeContext.Provider value={{
            theme,
            handleThemeChange
        }}>
         {children}
        </ThemeContext.Provider>
    )

}

function useThemeCli(){
    const context = useContext(ThemeContext);
    return context;
}

export { ThemeProvider, useThemeCli }