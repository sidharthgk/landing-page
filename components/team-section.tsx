import React from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TeamSection() {
  const team = [
    {
      name: "Ummu Habeeba K",
      role: "Lead at ProSEED",
      description:
        "The Lead at ProSEED is at the forefront of our industry-academia collaborations, driving strong partnerships that fuel SparkVenture's success.",
      imageSrc: "/ummu-habeeba.jpeg",
    },
    {
      name: "Saritha Haridas A",
      role: "Trainer at ProSEED",
      description:
        "With a commitment to empowering individuals through education and skill development, she plays a key role in nurturing our talent.",
      imageSrc: "/saritha-haridas.jpg",
    },
    {
      name: "Shabeer Puthukkudi",
      role: "EX-BT Director/Founder/CTO",
      description:
        "A visionary leader with extensive experience in mobile systems software development, his passion propels our mission forward.",
      imageSrc: "/shabeer.png",
    },
    {
      name: "Yusra Shabeer",
      role: "Business Operations Director of Veone Limited",
      description:
        "Her expertise in operational strategy ensures that our day-to-day operations align with our long-term vision and goals.",
      imageSrc: "/yusra.jpeg",
    },
    {
      name: "Dr Sreela Sreedhar",
      role: "Head of the CSE Department at TocH Institute",
      description:
        "Providing invaluable academic leadership, her insights ensure that our initiatives are both innovative and educationally impactful.",
      imageSrc: "/sreela.jpeg",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind SparkVenture who make innovation possible
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {team.slice(0, 3).map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Center the last two cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mt-8">
          {team.slice(3).map((member, index) => (
            <TeamMemberCard key={index + 3} member={member} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    description: string;
    imageSrc: string;
  };
  index: number;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="bg-white/85 backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <CardHeader className="flex flex-col items-center text-center pt-8">
        <div className="relative w-28 h-28 mb-6 ring-4 ring-primary/10 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
          <Image
            src={member.imageSrc}
            alt={member.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-bold text-primary mb-1">
          {member.name}
        </CardTitle>
        <p className="text-md font-medium text-gray-600 pb-2 border-b border-gray-200 w-2/3">
          {member.role}
        </p>
      </CardHeader>
      <CardContent className="text-center px-8 pb-8">
        <p className="text-gray-700 leading-relaxed">{member.description}</p>
      </CardContent>
    </Card>
  );
}
