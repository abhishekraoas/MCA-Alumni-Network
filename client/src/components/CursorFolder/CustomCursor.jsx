import React, { useEffect, useState, useRef } from "react";
import "./CursorTrail.css";
import _ from "lodash";

const CustomCursor = () => {
  // ...
};
const CursorTrail = () => {
  const [dots, setDots] = useState(Array(5).fill({ x: 0, y: 0 }));
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouseRef.current = {
      x: event.pageX,
      y: event.pageY,
    };
  };

  useEffect(() => {
    const throttledMouseMove = _.throttle(handleMouseMove, 10);
    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateDots = () => {
      setDots((prevDots) => {
        return prevDots.map((dot, index) => {
          if (index === 0) {
            return {
              x: dot.x + (mouseRef.current.x - dot.x) * 0.2,
              y: dot.y + (mouseRef.current.y - dot.y) * 0.2,
            };
          } else {
            const previousDot = prevDots[index - 1];
            return {
              x: dot.x + (previousDot.x - dot.x) * 0.2,
              y: dot.y + (previousDot.y - dot.y) * 0.2,
            };
          }
        });
      });
    };

    const interval = setInterval(updateDots, 20);

    return () => {
      clearInterval(interval);
    };
  }, [mouseRef.current]);

  return (
    <>
      {dots.map((dot, index) => (
        <div
          key={index}
          className="trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: 1 - index * 0.1,
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
