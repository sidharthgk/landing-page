"use client";
import { useEffect, useState } from "react";

type ParticleStyle = {
  width: string;
  height: string;
  top: string;
  left: string;
  backgroundColor: string;
  animationDelay: string;
  animationDuration: string;
};

export default function FloatingParticles({ theme }: { theme: string }) {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    const newParticles: ParticleStyle[] = Array.from({ length: 6 }).map((_, i) => ({
      width: `${Math.random() * 200 + 100}px`,
      height: `${Math.random() * 200 + 100}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      backgroundColor:
        theme === "dark"
          ? `hsla(var(--${i % 2 ? "primary" : "secondary"}), ${Math.random() * 0.2 + 0.1})`
          : `hsla(var(--${i % 2 ? "primary" : "secondary"}), ${Math.random() * 0.1 + 0.05})`,
      animationDelay: `${i * 0.5}s`,
      animationDuration: `${Math.random() * 10 + 10}s`,
    }));
    setParticles(newParticles);
  }, [theme]);

  return (
    <div className="absolute inset-0 -z-5">
      <div className="relative w-full h-full">
        {particles.map((style, i) => (
          <div key={i} className="absolute rounded-full mix-blend-multiply animate-float" style={style} />
        ))}
      </div>
    </div>
  );
}
