"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import heroIllustration from "../public/spark-logo-prize.png";

// A simple typewriter effect component.
function Typewriter({ text, speed = 150 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-white mt-[-65px]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#6b21a80c_1px,transparent_1px),linear-gradient(to_bottom,#6b21a80c_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-12 md:grid-cols-2 md:items-center md:py-0 md:px-16">
        <div>
          <h1 className="whitespace-nowrap text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Spark Venture 2025
          </h1>
          <p className="mt-4 text-xl font-semibold text-purple-700">
            The Innovation Journey Starts <Typewriter text="Now!" />
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The countdown has begun! Spark Venture 2025 is officially here,
            and we’re calling all engineering and computer science students in
            Kerala to step up and showcase their groundbreaking ideas. Powered
            by Core Cognitics in collaboration with Toc H Institute of Science
            and Technology, this is your moment to turn your vision into reality.
          </p>
          <p className="mt-6 text-lg font-semibold text-purple-600">
            Compete. Innovate. Transform.
          </p>
          <div className="mt-8 flex flex-col items-center gap-y-4 md:flex-row md:gap-x-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-400 bg-purple-300 text-slate-900 hover:bg-purple-50"
            >
              <Link href="/how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
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
