import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Bridging Academia and Industry for Technological Triumphs
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Spark Venture – Ignite Innovation Challenge is a student project/start-up funding initiative instituted by
            global technology companies and ProSEED, conducted in association with Educational institutes across UK, UAE
            and India.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/register">Register Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </section>
  )
}

