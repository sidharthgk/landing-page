import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamSection() {
  const team = [
    {
      name: "Ummu Habeeba K",
      role: "Lead at ProSEED",
      description:
        "The Lead at ProSEED, is at the forefront of the Spark venture's industry-academia collaborations. Her role is instrumental in creating and maintaining strong partnerships that drive the initiative's success.",
    },
    {
      name: "Saritha Haridas A",
      role: "Trainer at ProSEED",
      description:
        "Contributes her expertise in training and development. Her commitment to empowering individuals through education and skill development aligns perfectly with Spark Venture's mission.",
    },
    {
      name: "Shabeer Puthukkudi",
      role: "EX-BT Director/Founder/CTO",
      description:
        "A visionary leader with a robust background as the ex-BT Director, Mobile Systems Software Development and the current CTO of Veone Limited. His experience and passion drive Spark Venture's mission.",
    },
    {
      name: "Yusra Shabeer",
      role: "Business Operations Director of Veone Limited",
      description:
        "Brings her expertise in operational strategy and management to Spark Venture. Her role is pivotal in ensuring that the initiative's day-to-day operations align with its long-term vision and goals.",
    },
    {
      name: "Dr Sreela Sreedhar",
      role: "Head of the CSE Department at TocH Institute",
      description:
        "Provides invaluable academic leadership. Her deep understanding of the academic landscape ensures that Spark Venture's initiatives are both innovative and educationally impactful.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-t from-background to-background/80">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <Image src="/placeholder.svg" alt={member.name} width={80} height={80} className="rounded-full mb-4" />
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-sm text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

