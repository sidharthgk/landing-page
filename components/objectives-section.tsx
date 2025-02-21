import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Layout, Coins } from "lucide-react"

export default function ObjectivesSection() {
  const objectives = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Objective",
      content:
        "Empowering creative student projects through financial grants to evolve them into tangible products, cultivating a dynamic startup ecosystem within the country.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Eligibility & Team Size",
      content:
        "Engineering students currently enrolled in any branch across the colleges in Kerala. Teams of 2-4 students with a faculty supervisor.",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Domain",
      content:
        "IT and IoT solutions addressing Healthcare, EdTech, FinTech, Urban Systems, Renewable Energy, AgriTech, Sustainability, Cybersecurity, and Retail Technology.",
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Fee",
      content: "No Registration Fees",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-t from-background to-background/80">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
          Student Project / Start-up Funding Initiative
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">{objective.icon}</div>
                  <CardTitle className="text-lg">{objective.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{objective.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

