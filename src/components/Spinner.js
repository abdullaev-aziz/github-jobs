import React from 'react'
import '../styles/Spinner.css'

export default function Spinner() {
    return (
      <div className="lds-ring"> Loading Jobs...
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
}
