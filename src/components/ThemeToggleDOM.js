import React from "react";
import "../styles/ThemeToggle.css";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../app/actionTypes";

export default function ThemeToggle() {

  const isDark = useSelector(store => store.isDark)

  return (
    <>
      <label className="switch">
        <input
          type="checkbox"
          onChange={}
          checked={currentTheme === "darkTheme" ? true : false}
        />
        <span className="slider round"></span>
      </label>
    </>
  );
}
