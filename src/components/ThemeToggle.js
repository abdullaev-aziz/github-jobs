import React from "react";
import "./ThemeToggle.css";
import { useDispatch } from "react-redux";
import actionTypes from '../app/actionTypes'

export default function ThemeToggle() {

  const dispatch = useDispatch();
  const toggleThemeDispatcher = () => dispatch({ type: actionTypes.TOGGLE_THEME });

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleThemeDispatcher}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}
