import { Children, createContext, useContext } from "react";
import { useState,useEffect } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme(){
//     return useContext(ThemeContext)
// }
export const useTheme = () =>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) =>{
    const [themeMode, setThemeMode] = useState("light")

const lightTheme = () =>{
  setThemeMode("light")
}

const darkTheme = () =>{
  setThemeMode("dark")
}
useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
return <ThemeContext.Provider value={{themeMode,darkTheme,lightTheme}}>{children}</ThemeContext.Provider>
}