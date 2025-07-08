"use client";

import { useRef, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  shape: "star" | "triangle" | "circle" | "square" | "cross";
};

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];
  const numParticles = 20;

  const minDistance = 30; // minimal jarak antar shape

  const createParticles = (width: number, height: number) => {
    let attempts = 0;

    for (let i = 0; i < numParticles; i++) {
    let valid = false;
    let x = 0;
    let y = 0;
    let size = Math.random() * 10 + 15;

    while (!valid && attempts < 1000) {
        x = Math.random() * width;
        y = Math.random() * height;
        valid = true;

        for (const p of particles) {
        const dx = p.x - x;
        const dy = p.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < minDistance) {
            valid = false;
            break;
        }
        }
        attempts++;
    }

        particles.push({
        x,
        y,
        size,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3,
        shape: getRandomShape(), // bisa "star", "triangle", "circle", "square", dll
        });
    }
};

  const getRandomShape = (): Particle["shape"] => {
    const shapes: Particle["shape"][] = ["triangle", "circle", "square", "cross"];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };


  const drawTriangle = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number
  ) => {
    const height = size * Math.sqrt(3) / 2;
    ctx.beginPath();
    ctx.moveTo(x, y - height / 2);
    ctx.lineTo(x - size / 2, y + height / 2);
    ctx.lineTo(x + size / 2, y + height / 2);
    ctx.closePath();

    // Set transparan fill (optional)
    ctx.fillStyle = "transparent"; // bisa dihilangkan juga
    ctx.strokeStyle = "blue";     // warna border
    ctx.lineWidth = 1;             // ketebalan border

    ctx.stroke(); // gambar border
  };

  const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  strokeColor = "red",
  lineWidth = 1
    ) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "transparent"; // isi transparan
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    };

const drawCross = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  strokeColor = "black",
  lineWidth = 1
    ) => {
    ctx.beginPath();
    ctx.moveTo(x - size / 2, y - size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.moveTo(x + size / 2, y - size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    };

const drawSquare = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  strokeColor = "yellow",
  lineWidth = 1
    ) => {
    const half = size / 2;
    ctx.beginPath();
    ctx.rect(x - half, y - half, size, size);
    ctx.fillStyle = "transparent";
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    };


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles(canvas.width, canvas.height);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around the screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        switch (p.shape) {
        case "triangle":
            drawTriangle(ctx, p.x, p.y, p.size);
            break;
        case "circle":
            drawCircle(ctx, p.x, p.y, p.size);
            break;
        case "cross":
            drawCross(ctx, p.x, p.y, p.size);
            break;
        case "square":
            drawSquare(ctx, p.x, p.y, p.size);
            break;
        }

      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;
