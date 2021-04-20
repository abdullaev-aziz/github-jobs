import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import useDarkTheme from "../hooks/useDarkTheme";


export default function Header() {
    const appRef = useDarkTheme();

  return (
    <div className="Header">
      <span className="title">GitHub Careers</span>
      <ThemeToggle />
    </div>
  );
}
