import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function useDarkTheme() {
  const { isDark } = useSelector((store) => store);
  const appRef = useRef();
  useEffect(() => {
    if (!appRef.current) return;
    if (isDark) {
      document.body.classList.add("darkTheme");
      appRef.current.classList.add("darkTheme");
    } else {
      appRef.current.classList.remove("darkTheme");
      document.body.classList.remove("darkTheme");
    }
  }, [isDark]);

  return appRef;
}