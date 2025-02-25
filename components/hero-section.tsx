"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroIllustration from "../public/sp-poster.jpg";
import Typewriter from "@/components/typewriter";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden mt-[-65px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80 animate-fade-in" />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-0 md:px-16">
        <div className="space-y-4 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-4 justify-start ml-[-16px]">
              <Image
                src="/sp-black-typography.svg"
                alt="Spark Venture 2025 Black Typography"
                width={400}
                height={100}
                className="block dark:hidden object-left object-contain"
              />
              <Image
                src="/sp-white-typography.svg"
                alt="Spark Venture 2025 White Typography"
                width={400}
                height={100}
                className="hidden dark:block object-left object-contain"
              />
            </div>
            <p className="text-xl font-semibold text-primary flex items-center gap-2">
              The Innovation Journey Starts{" "}
              <Typewriter texts={["Now!", "Today!", "Right Away!"]} />
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-8 text-gray-700">
              The countdown has begun! Spark Venture 2025 is officially here, and we're calling all engineering and computer science students in Kerala to step up and showcase their groundbreaking ideas. Powered by Core Cognitics in collaboration with Toc H Institute of Science and Technology, this is your moment to turn your vision into reality.
            </p>
            <p className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Compete. Innovate. Transform.
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-6 pt-6">
            {/* Apply Now button */}
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70"
            >
              <Link href="/apply" className="px-8">
                Apply Now
              </Link>
            </Button>
            {/* How It Works button */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full md:w-auto bg-primary/20 hover:bg-primary/30"
            >
              <Link href="/how-it-works" className="px-8">
                How It Works
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <Image
              src={heroIllustration}
              alt="Spark Venture Prize"
              width={500}
              height={500}
              className="relative w-full max-w-sm h-auto drop-shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
