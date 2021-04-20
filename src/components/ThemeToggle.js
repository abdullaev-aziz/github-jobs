import React from "react";
import "./ThemeToggle.css";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const toggleThemeDispatcher = () =>
    dispatch({ type: actionTypes.TOGGLE_THEME });

  const isDark = useSelector((store) => store.isDark);

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleThemeDispatcher}
          checked={isDark}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}
