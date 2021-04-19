import React from 'react'
import './Header.css'
import ThemeToggle from "../components/ThemeToggle";


export default function Header() {
    return (
      <div className="Header">
        <span className="title">GitHub Jobs</span>
        <ThemeToggle />
      </div>
    );
}
