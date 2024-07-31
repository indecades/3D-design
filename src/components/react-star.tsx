"use client";

import React, { useEffect } from "react";

interface Props {
  speedFactor?: number;
  backgroundColor?: string;
  starColor?: [number, number, number];
  starCount?: number;
}

interface Star {
  x: number;
  y: number;
  z: number;
}

const Starfield: React.FC<Props> = ({
  speedFactor = 0.05,
  backgroundColor = "black",
  starColor = [255, 255, 255],
  starCount = 5000,
}) => {
  useEffect(() => {
    const canvas = document.getElementById(
      "starfield"
    ) as HTMLCanvasElement | null;

    if (!canvas) {
      console.error('Could not find canvas element with id "starfield"');
      return;
    }

    const c = canvas.getContext("2d");
    if (!c) {
      console.error("Could not get 2d context from canvas element");
      return;
    }

    const setCanvasExtents = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasExtents();
    window.addEventListener("resize", setCanvasExtents);

    const makeStars = (count: number): Star[] => {
      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
        });
      }
      return stars;
    };

    let stars = makeStars(starCount);

    const clear = () => {
      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, canvas.width, canvas.height);
    };

    const putPixel = (x: number, y: number, brightness: number) => {
      const rgb = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`;
      c.fillStyle = rgb;
      c.fillRect(x, y, 1, 1);
    };

    const moveStars = (distance: number) => {
      stars.forEach((star) => {
        star.z -= distance;
        if (star.z <= 1) {
          star.z += 1000;
        }
      });
    };

    let prevTime: number;

    const tick = (time: number) => {
      if (prevTime !== undefined) {
        const elapsed = time - prevTime;
        moveStars(elapsed * speedFactor);
        clear();

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        stars.forEach((star) => {
          const x = cx + star.x / (star.z * 0.001);
          const y = cy + star.y / (star.z * 0.001);

          if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            const d = star.z / 1000;
            const b = 1 - d * d;
            putPixel(x, y, b);
          }
        });
      }
      prevTime = time;
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", setCanvasExtents);
    };
  }, [starColor, backgroundColor, speedFactor, starCount]);

  return (
    <canvas
      id="starfield"
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    ></canvas>
  );
};

export default Starfield;
