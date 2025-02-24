"use client";
import { useEffect, useState } from "react";

export type TypewriterProps = {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
};

export default function Typewriter({
  texts,
  speed = 80,
  pause = 500,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentText = texts[currentIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, pause);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentText, speed, pause, texts.length]);

  return (
    <span className={`text-primary border-r-2 border-primary animate-pulse ${className}`}>
      {displayedText}
    </span>
  );
}
