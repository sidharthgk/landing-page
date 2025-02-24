import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Layers, Layout, CircuitBoard, ArrowUpCircle, RefreshCcw } from "lucide-react";

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
      content: "Gain valuable guidance from industry professionals and experienced mentors to refine your project and enhance your skills.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Networking & Industry Exposure",
      content: "Connect with top professionals, entrepreneurs, and expand your professional network.",
    },
    {
      icon: <CircuitBoard className="h-6 w-6" />,
      title: "Real-World Impact",
      content: "Work on solutions to real-world problems and create technologies that can make a difference in society.",
    },
    {
      icon: <ArrowUpCircle className="h-6 w-6" />,
      title: "Skill Enhancement",
      content: "Develop critical skills such as project management, problem-solving, and business strategy, essential for your future career.",
    },
    {
      icon: <RefreshCcw className="h-6 w-6" />,
      title: "Recognition & Opportunities",
      content: "Get recognized for your innovation, opening doors to further opportunities, internships, and collaborations.",
    },
  ];

  return (
    // Removed custom background classes so the section inherits the global background.
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Student Project / Start-up Funding Initiative
        </h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/20 transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3 text-primary transition-transform duration-300 hover:scale-110">
                    {objective.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">{objective.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
