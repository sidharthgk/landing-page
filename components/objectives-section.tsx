import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  Layers,
  Layout,
  CircuitBoard,
  ArrowUpCircle,
  RefreshCcw,
} from "lucide-react";

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Funding Opportunities",
      content: "Secure financial support to bring your innovative ideas to life.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Expert Mentorship",
      content:
        "Gain valuable guidance from industry professionals and experienced mentors to refine your project and enhance your skills.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Networking & Industry Exposure",
      content:
        "Connect with top professionals, entrepreneurs, and expand your professional network.",
    },
    {
      icon: <CircuitBoard className="h-6 w-6" />,
      title: "Real-World Impact",
      content:
        "Work on solutions to real-world problems and create technologies that can make a difference in society.",
    },
    {
      icon: <ArrowUpCircle className="h-6 w-6" />,
      title: "Skill Enhancement",
      content:
        "Develop critical skills such as project management, problem-solving, and business strategy, essential for your future career.",
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: "Recognition & Opportunities",
      content:
        "Get recognized for your innovation, opening doors to further opportunities, internships, and collaborations.",
    },
  ];

  return (
    <section className="relative py-16 text-foreground">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80 dark:bg-transparent animate-fade-in" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">
            Student Project / Start-up Funding Initiative
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock your potential with opportunities for funding, mentorship, and industry exposure.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <Card
              key={index}
              className="bg-white/85 backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3 text-primary transition-transform duration-300 hover:scale-110">
                    {objective.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {objective.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-gray-700 leading-relaxed">
                  {objective.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
