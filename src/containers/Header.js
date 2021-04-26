import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import ThemeToggle from '../components/ThemeToggle'

export default function Header() {
  const isDark = useSelector((store) => store.isDark);

  return (
    <div
      className={`Header ${isDark ? "darkTheme" : "lightTheme"}`}
    >
      <Link to="/">
        <span className="title">GitHub Careers</span>
      </Link>
      <ThemeToggle />
    </div>
  );
}