"use client";
import Image from "next/image";
import { useState } from "react";

const fixedImages = [
  { src: "/images/winners.jpg", alt: "Winners" },
  { src: "/images/event.jpg", alt: "Event" },
  { src: "/images/preparation.jpg", alt: "Preparation" },
];

const sliderImages = [
  { src: "/images/gallery1.jpg", alt: "Gallery Image 1" },
  { src: "/images/gallery2.jpg", alt: "Gallery Image 2" },
  { src: "/images/gallery3.jpg", alt: "Gallery Image 3" },
  { src: "/images/gallery4.jpg", alt: "Gallery Image 4" },
];

function ImageSlider({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full relative h-64">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 mt-[-65px]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        {/* Fixed Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {fixedImages.map((img, index) => (
            <div key={index} className="relative h-64">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        {/* Slider Section */}
        <h2 className="text-2xl font-semibold text-center mb-4">More Moments</h2>
        <ImageSlider images={sliderImages} />
      </div>
    </main>
  );
}
