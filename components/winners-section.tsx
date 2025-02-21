import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function WinnersSection() {
  const winners = [
    {
      project: "AR Learning Aid for Dyslexic Users",
      college: "Mangalam College of Engineering",
      position: "First Prize",
    },
    {
      project: "First Aid Pro",
      college: "TocH Institute of Science and Technology",
      position: "Second Prize",
    },
    {
      project: "Air SecureX: An AirDraw Authentication",
      college: "Saintgits College of Engineering",
      position: "Third Prize",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-background to-background/80 py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Project Winners</h2>
          <p className="text-muted-foreground">Participating Colleges of Spark Venture 2024</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {winners.map((winner, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{winner.position}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{winner.project}</h3>
                <p className="text-sm text-muted-foreground">{winner.college}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

