import React from 'react';
import { TeamSection } from '@/components/team-section';

export default function AboutUsPage() {
  return (
    <main className="bg-gradient-to-b from-background to-background/80 text-foreground py-24 mt-[-65px]">
      <div className="container mx-auto px-6">
        {/* About Us Hero */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            About Us
          </h1>
          <div className="h-1 w-24 bg-primary/30 mx-auto mt-6 rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            At SparkVenture, we ignite innovation through collaboration and a relentless commitment to excellence.
          </p>
        </section>

        {/* Our Journey */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto bg-white/85 backdrop-blur-md border-none shadow-xl p-12 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="h-10 w-2 bg-primary rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-primary">Our Journey</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              SparkVenture was founded on the belief that innovation thrives when academia and industry join forces.
              We began with a vision to bridge the gap between theoretical learning and real-world problem solving.
              Today, we continue to empower bright minds to bring transformative ideas to life.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto bg-white/85 backdrop-blur-md border-none shadow-xl p-12 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="h-10 w-2 bg-primary rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-primary">Our Mission & Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to provide a platform where creativity and technology intersect to solve real-world challenges.
              We envision a future where every innovative idea can flourish, driving progress and making a positive impact on society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By fostering a culture of continuous learning, collaboration, and entrepreneurial spirit, we aim to build a community
              that nurtures talent and celebrates breakthrough innovations.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </div>
    </main>
  );
}
