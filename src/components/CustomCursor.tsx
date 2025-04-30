
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isClickable = 
        hoveredElement instanceof HTMLButtonElement ||
        hoveredElement instanceof HTMLAnchorElement ||
        hoveredElement?.closest('button') ||
        hoveredElement?.closest('a') ||
        hoveredElement?.classList.contains('clickable');
      
      // Fix: Convert the result to a boolean explicitly
      setIsPointer(Boolean(isClickable));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", updateCursorStyle);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", updateCursorStyle);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseLeave);
      document.body.style.cursor = "auto";
    };
  }, [position]);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-150 ${
          isClicking ? "scale-75" : "scale-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: isPointer ? "30px" : "12px",
          height: isPointer ? "30px" : "12px",
          backgroundColor: isPointer ? "rgba(30, 174, 219, 0.2)" : "rgba(155, 135, 245, 0.7)",
          boxShadow: isPointer 
            ? "0 0 10px 2px rgba(30, 174, 219, 0.5)" 
            : "0 0 5px 1px rgba(155, 135, 245, 0.3)",
          mixBlendMode: "screen"
        }}
      />

      {/* Cursor trail effect */}
      <div
        className="fixed pointer-events-none z-40 rounded-full bg-cyber-blue/20 w-4 h-4 transition-transform duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%) scale(0.5)",
          opacity: 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;
