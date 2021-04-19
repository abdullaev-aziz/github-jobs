import React from "react";
import "../styles/ThemeToggle.css";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const toggleThemeDispatcher = () => {
    dispatch({ type: actionTypes.TOGGLE_THEME });
    if (document.body.classList.contains('darkTheme')) {
      document.body.classList.remove('darkTheme')
    } else {
      document.body.classList.add('darkTheme')
    }

  }

  const currentTheme = useSelector((store) => store.currentTheme.name);
  console.log("current theme", currentTheme);

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleThemeDispatcher}
          checked={currentTheme === "darkTheme" ? true : false}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}
