import React from "react";
import "../styles/ThemeToggle.css";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const isDark = useSelector((store) => store.isDark);

  const toggleTheme = () => {
    dispatch({ type: actionTypes.DARK_THEME, payload: !isDark });
  };

  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isDark} />
        <span className="slider round"></span>
      </label>
    </>
  );
}
