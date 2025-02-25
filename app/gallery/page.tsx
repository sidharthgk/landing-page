"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Camera, Share2, Calendar } from "lucide-react";

// Winner images
const fixedImages = [
  { src: "/winner1.jpg", alt: "Winner1", college: "Mangalam College of Engineering", position: "First Place" },
  { src: "/winner2.jpg", alt: "Winner2", college: "Toc H Institute of Science & Technology", position: "Second Place" },
  { src: "/winner3.jpg", alt: "Winner3", college: "Saintgits College of Engineering", position: "Third Place" },
];

// Slider images (More Moments)
const sliderImages = [
  { src: "/images/gallery1.jpg", alt: "Gallery Image 1", caption: "Opening Ceremony" },
  { src: "/images/gallery2.jpg", alt: "Gallery Image 2", caption: "Team Presentations" },
  { src: "/images/gallery3.jpg", alt: "Gallery Image 3", caption: "Workshop Session" },
  { src: "/images/gallery4.jpg", alt: "Gallery Image 4", caption: "Award Ceremony" },
];

// Event highlights
const eventHighlights = [
  { icon: Camera, title: "500+ Photos", description: "Captured throughout the hackathon" },
  { icon: Calendar, title: "48 Hours", description: "Of non-stop innovation" },
  { icon: Share2, title: "30+ Teams", description: "Showcasing brilliant solutions" },
];

function ImageSlider({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full relative h-80">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-center">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-3 mt-5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 w-3 rounded-full transition-all ${
              idx === current ? "bg-primary scale-125 w-6" : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground py-28 mt-[-65px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/*heading*/}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/10 animate-pulse" />
          <h1 className="text-5xl font-bold relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 pb-2">
            Gallery
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Memories from our extraordinary journey of innovation, collaboration, and creativity.
          </p>
        </div>

        {/* Winners Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-2">Winners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the top innovators whose projects rose above the rest, demonstrating excellence in creativity, 
              technical implementation, and real-world impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {fixedImages.map((img, index) => (
              <div key={index} className="group">
                <div className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl bg-white">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {img.position}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-primary">{img.college}</h3>                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More Moments Section */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-primary mb-2">More Moments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Relive the memorable moments captured throughout the event, from intense coding sessions
              to collaborative problem-solving and celebratory achievements.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ImageSlider images={sliderImages} />
          </div>
        </section>

      </div>
    </main>
  );
}