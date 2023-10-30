import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      setTheme("light");
    } else {
      document.body.classList.add("dark");
      setTheme("dark");
    }
  };
  return (
    <main>
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
        <h1 className="flex items-center text-5xl font-bold transition-colors dark:text-white dark:opacity-95">
          polar
          <span className="ml-1 rounded-xl bg-current p-2 text-[0.7em] leading-none">
            <span className="text-white dark:text-black">lights</span>
          </span>
        </h1>
        <div className="mt-4">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-sm transition-colors border rounded-full glass drop-shadow-sm text-stone-800 dark:text-white backdrop-blur-lg hover:border-stone-300 dark:border-stone-500 dark:hover:border-stone-400"
          >
            {theme === "light" ? "🌗" : "🌞"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
