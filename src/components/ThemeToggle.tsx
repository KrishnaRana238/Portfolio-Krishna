
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 glass rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-110 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-cyber-light group-hover:text-cyber-blue transition-colors" />
      ) : (
        <Moon size={18} className="text-cyber-blue group-hover:text-cyber-light transition-colors" />
      )}
      <span className="absolute inset-0 rounded-full border border-white/10 animate-pulse-glow"></span>
    </button>
  );
};

export default ThemeToggle;
