import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";


const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return(
        <>
        <button onClick={()=> {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}>
           
        </button>
         <span>{themeMode === "light" ? "Turn off" : "Lights on"}</span>
         </>
    )
}

export default ThemeToggler;