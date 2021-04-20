import { useState, useEffect } from "react";
import ThemeContext from './ThemeContext'
import isDarkTheme from '../../utils/isDarkTheme'
import themes from "../../styles/themes";

const dark = isDarkTheme();

function ThemeProvider({ children }) {
  const [isDark, setDark] = useState(dark);
  const [themeStyle, setThemeStyle] = useState({});

  useEffect(()=>{
    isDark ? setThemeStyle(themes.darkTheme) : setThemeStyle(themes.lightTheme)
  }, [isDark])
  return (
    <ThemeContext.Provider value={{ isDark, setDark, themeStyle}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
