import React, { useState, useEffect } from "react";
import "./Rays.css";

function Rays() {
  function toggleTheme() {
    if (document.body.classList.contains("dark"))
      document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }

  return (
    <main>
      <div className="container">
        <div className="background">
          <div className="jumbo"></div>
        </div>
        <h1 className="title">
          charm
          <span className="ui">
            <div className="ux">UI</div>
          </span>
        </h1>
        <div className="button-container">
          <button onClick={toggleTheme} className="toggle-button">
            Toggle Theme
          </button>
        </div>
      </div>
    </main>
  );
}

export default Rays;
