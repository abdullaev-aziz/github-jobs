import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import useDarkTheme from "../hooks/useDarkTheme";

export default function Header() {
  const appRef = useDarkTheme();

  return (
    <div className="Header" ref={appRef}>
      <a href="/">
        <span className="title">GitHub Careers</span>
      </a>
      <ThemeToggle />
    </div>
  );
}
