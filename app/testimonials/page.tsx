"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  User,
  Building2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  author: string;
  role: string;
  institution: string;
  content: string;
  image: string;
};

const testimonials: { [key: string]: Testimonial[] } = {
  faculty: [
    {
      author: "Dr. Vinodh P Vijayan",
      role: "Principal",
      institution: "Mangalam College of Engineering Ettumanoor, Kerala",
      content:
        "I am immensely proud and honoured to accept the first prize in this year's SparkVenture24, Ignite Innovation Challenge organised by Freston Analytics Pvt Ltd, ProSEED, and TocH Institute of Science and Technology...",
      image: "/Dr.-Vinodh-P-Vijayan.jpg",
    },
    {
      author: "Dr. Preethi Thekkath",
      role: "Principal",
      institution: "Toc H Institute of Science & Technology Arakkunnam, Kerala",
      content:
        "The SparkVenture - Ignite Innovation Challenge has been an exceptional platform for our students, offering them invaluable exposure to real-world challenges and the chance to develop innovative projects with significant potential impact...",
      image: "/dr-preethi.jpeg",
    },
    {
      author: "Dr. Sudha T",
      role: "Principal",
      institution: "Saintgits College of Engineering (Autonomous)",
      content:
        "SparkVenture-2024 stands as a testament to the boundless creativity and ingenuity of our students. I am delighted to see that participants from Saintgits College of Engineering secured third prize in the event...",
      image: "/dr-sudha.jpg",
    },
  ],
  companies: [
    {
      author: "John Smith",
      role: "CEO",
      institution: "Tech Innovations Ltd",
      content:
        "The talent pool from this program has consistently impressed us. The students show remarkable problem-solving abilities and innovative thinking...",
      image: "/images/testimonial-company.jpg",
    },
  ],
  students: [
    {
      author: "Aarav Kumar",
      role: "Final Year Student",
      institution: "Computer Science Engineering",
      content:
        "Participating in SparkVenture was a transformative experience. The mentorship and exposure to industry standards helped shape our project significantly...",
      image: "/images/testimonial-student.jpg",
    },
  ],
};

function TestimonialSlider() {
  const [category, setCategory] = useState("faculty");
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentTestimonials = testimonials[category];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isAnimating]);

  const handlePrev = () => {
    setIsAnimating(true);
    setCurrent((prev) =>
      prev === 0 ? currentTestimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setCurrent((prev) =>
      prev === currentTestimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "faculty":
        return <User className="h-5 w-5" />;
      case "companies":
        return <Building2 className="h-5 w-5" />;
      case "students":
        return <GraduationCap className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      {/* Category Buttons */}
      <div className="flex justify-center gap-4">
        {Object.keys(testimonials).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setCurrent(0);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
              category === cat
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            {getCategoryIcon(cat)}
            <span className="capitalize font-medium">{cat}</span>
          </button>
        ))}
      </div>

      {/* Testimonial Slider */}
      <div className="relative max-w-4xl mx-auto px-4">
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-xl">
          <CardContent className="relative p-12">
            <Quote className="absolute text-primary/10 h-24 w-24 -top-6 -left-6 transform -rotate-12" />
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {currentTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-8"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Bigger Round Image */}
                      <div className="rounded-full overflow-hidden w-fit h-fit shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          // Increased from 200x200 to 400x400
                          width={400}
                          height={400}
                          className="object-cover object-center"
                        />
                      </div>

                      <div className="text-center md:text-left space-y-4">
                        <p className="text-lg text-gray-700 leading-relaxed break-words">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h3 className="text-xl font-bold text-primary">
                            {testimonial.author}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                            <span className="mx-2">•</span>
                            {testimonial.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Arrows */}
        {currentTestimonials.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white text-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Indicator Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {currentTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 ${
                current === index
                  ? "w-8 h-2 bg-primary rounded-full"
                  : "w-2 h-2 bg-primary/30 rounded-full hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="bg-gradient-to-b from-background to-background/80 text-foreground py-24 mt-[-65px]">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Testimonials
          </h1>
          <p className="text-xl text-gray-600">
            Hear from our community about their experiences
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </main>
  );
}
