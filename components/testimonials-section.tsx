import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      author: "Dr. Vinodh P Vijayan",
      role: "Principal",
      institution: "Mangalam College of Engineering Ettumanoor, Kerala",
      content:
        "I am immensely proud and honoured to accept the first prize in this year's SparkVenture24, Ignite Innovation Challenge organised by Freston Analytics Pvt Ltd and ProSEED and TocH Institute of Science and Technology...",
    },
    {
      author: "Dr. Preethi Thekkath",
      role: "Principal",
      institution: "Toc H Institute of Science & Technology Arakkunnam, Kerala",
      content:
        "The SparkVenture - Ignite Innovation Challenge has been an exceptional platform for our students, offering them invaluable exposure to real-world challenges and the chance to develop innovative projects with significant potential impact...",
    },
    {
      author: "Dr. Sudha T",
      role: "Principal",
      institution: "Saintgits College of Engineering (Autonomous)",
      content:
        "SparkVenture-2024 stands as a testament to the boundless creativity and ingenuity of the participated students and I am delighted to see that students of Saintgits College of Engineering secured third prize in the event...",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                  <br />
                  {testimonial.institution}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

