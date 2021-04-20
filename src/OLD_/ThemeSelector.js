import React, { useState, useContext, useEffect } from "react";
import ThemeContext from './contexts/ThemeContext'


/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */

const LightTheme = React.lazy(() => import("./LightTheme"));
const DarkTheme = React.lazy(() => import("./DarkTheme"));


const ThemeSelector = ({ children }) => {
    const {isDark} = useContext(ThemeContext);
    
return(
  <>
    {/* Conditionally render theme, based on the current client context */}
    <React.Suspense fallback={<div>Loading...</div>}>
      {isDark && <DarkTheme />}
      {!isDark && <LightTheme />}
    </React.Suspense>
    {/* Render children immediately! */}
    {children}
  </>

)
};

export default ThemeSelector;
