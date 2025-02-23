"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import heroIllustration from "../public/spark-logo-prize.png";

// Typewriter effect component
function Typewriter({
  text,
  speed = 150,
  pause = 1000,
}: {
  text: string;
  speed?: number;
  pause?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === text) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText === "") {
      timer = setTimeout(() => setIsDeleting(false), pause);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? text.substring(0, prev.length - 1) : text.substring(0, prev.length + 1)
        );
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pause]);

  return <span>{displayedText}</span>;
}

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden mt-[-65px]">

      {/* Subtle grid background pattern */}
      <div
        className="absolute inset-0 -z-10 
        bg-[linear-gradient(to_right,#6b21a80c_1px,transparent_1px),linear-gradient(to_bottom,#6b21a80c_1px,transparent_1px)] 
        bg-[size:14px_24px]"
      />

      {/* Glowing purple background effects */}
      <div
        className={`absolute -top-20 -left-20 h-72 w-72 rounded-full 
        blur-3xl transition-all duration-500 ${
          theme === "dark" ? "bg-purple-900/50" : "bg-purple-600/20"
        }`}
      />
      <div
        className={`absolute -bottom-20 -right-20 h-72 w-72 rounded-full 
        blur-3xl transition-all duration-500 ${
          theme === "dark" ? "bg-purple-800/50" : "bg-purple-500/20"
        }`}
      />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-2 md:items-center md:py-0 md:px-16">
        <div>
          <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight sm:text-6xl">
            Spark Venture 2025
          </h1>
          <p className="mt-4 text-xl font-semibold text-purple-700 dark:text-purple-400">
            The Innovation Journey Starts <Typewriter text="Now!" />
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
            The countdown has begun! Spark Venture 2025 is officially here, and we’re calling all
            engineering and computer science students in Kerala to step up and showcase their
            groundbreaking ideas. Powered by Core Cognitics in collaboration with Toc H Institute of
            Science and Technology, this is your moment to turn your vision into reality.
          </p>
          <p className="mt-6 text-lg font-semibold text-purple-600 dark:text-purple-300">
            Compete. Innovate. Transform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-y-4 md:flex-row md:gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 dark:from-purple-800 dark:to-purple-600"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-400 bg-purple-300 text-slate-900 hover:bg-purple-50 dark:bg-purple-700 dark:border-purple-400 dark:text-white dark:hover:bg-purple-600"
            >
              <Link href="/how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={heroIllustration}
            alt="Spark Venture Prize"
            width={500}
            height={500}
            className="w-full max-w-sm h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
