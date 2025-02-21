import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  return (
    <div className="container py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Spark Venture Registration</CardTitle>
          <CardDescription>Register your team for the Ignite Innovation Challenge</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input id="teamName" placeholder="Enter your team name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="college">College</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your college" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mangalam">Mangalam College of Engineering</SelectItem>
                    <SelectItem value="toch">TocH Institute of Science and Technology</SelectItem>
                    <SelectItem value="saintgits">Saintgits College of Engineering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="projectDomain">Project Domain</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="edtech">EdTech</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="urban">Intelligent Urban Systems</SelectItem>
                    <SelectItem value="energy">Renewable Energy</SelectItem>
                    <SelectItem value="agritech">AgriTech</SelectItem>
                    <SelectItem value="sustainability">Sustainability</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea id="projectDescription" placeholder="Briefly describe your project idea" rows={4} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="teamSize">Team Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 Members</SelectItem>
                    <SelectItem value="3">3 Members</SelectItem>
                    <SelectItem value="4">4 Members</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit Registration
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

