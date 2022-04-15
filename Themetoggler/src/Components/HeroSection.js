import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from '../Colors';

const HeroSection = () => {
    const theme = useContext(ThemeContext);
    const currentTheme = AppTheme[theme]
    return (
        <div
        style={{
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`
        }}
        
        ></div>

    )
}

export default HeroSection;