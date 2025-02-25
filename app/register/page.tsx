"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    teamName: "",
    college: "",
    customCollege: "",
    projectDomain: "",
    projectDescription: "",
    teamSize: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <main className="bg-gradient-to-b from-background to-background/80 text-foreground min-h-screen py-24 mt-[-65px]">
      <div className="container mx-auto px-6">
        <Card className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-800/90 border-none shadow-2xl">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-primary text-3xl font-bold">
              Team Registration
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
              Fill in the details below to register your team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Email */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="email"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Enter your email"
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg focus:outline-none p-6"
                    required
                  />
                </div>

                {/* Password */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="password"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formState.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Enter your password"
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg focus:outline-none p-6"
                    required
                  />
                </div>

                {/* Team Name */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="teamName"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    Team Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="teamName"
                    value={formState.teamName}
                    onChange={(e) => handleChange("teamName", e.target.value)}
                    placeholder="Enter your team name"
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg focus:outline-none p-6"
                    required
                  />
                </div>

                {/* College Selection */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="college"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    College <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="college"
                    value={formState.college}
                    onChange={(e) => {
                      handleChange("college", e.target.value);
                      if (e.target.value !== "other") {
                        handleChange("customCollege", "");
                      }
                    }}
                    required
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 placeholder:text-gray-400 text-base focus:outline-none p-4 appearance-none"
                  >
                    <option value="" disabled>
                      Select your college
                    </option>
                    <option value="toch">
                      Toc H Institute of Science &amp; Technology
                    </option>
                    <option value="mangalam">
                      Mangalam College of Engineering
                    </option>
                    <option value="saintgits">
                      Saintgits College of Engineering
                    </option>
                    <option value="cet">
                      College of Engineering, Trivandrum
                    </option>
                    <option value="nit">NIT Calicut</option>
                    <option value="gec">
                      Government Engineering College, Thrissur
                    </option>
                    <option value="model">
                      Model Engineering College, Thrikkakara
                    </option>
                    <option value="rgit">
                      Rajiv Gandhi Institute of Technology, Kottayam
                    </option>
                    <option value="mace">
                      Mar Athanasius College of Engineering
                    </option>
                    <option value="coust">
                      Cochin University of Science &amp; Technology
                    </option>
                    <option value="other">Other (Specify Below)</option>
                  </select>
                  {formState.college === "other" && (
                    <Input
                      id="customCollege"
                      placeholder="Enter your college name"
                      value={formState.customCollege}
                      onChange={(e) =>
                        handleChange("customCollege", e.target.value)
                      }
                      className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg focus:outline-none p-6"
                      required
                    />
                  )}
                </div>

                {/* Project Domain */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="projectDomain"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    Project Domain <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="projectDomain"
                    value={formState.projectDomain}
                    onChange={(e) =>
                      handleChange("projectDomain", e.target.value)
                    }
                    required
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 placeholder:text-gray-400 text-base focus:outline-none p-4 appearance-none"
                  >
                    <option value="" disabled>
                      Select project domain
                    </option>
                    <option value="ai">
                      Artificial Intelligence &amp; Machine Learning
                    </option>
                    <option value="iot">Internet of Things (IoT)</option>
                    <option value="blockchain">Blockchain Technology</option>
                    <option value="healthtech">Health Technology</option>
                    <option value="edutech">Educational Technology</option>
                    <option value="fintech">Financial Technology</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="other">Other Innovative Solutions</option>
                  </select>
                </div>

                {/* Project Description */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="projectDescription"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    Project Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="projectDescription"
                    value={formState.projectDescription}
                    onChange={(e) =>
                      handleChange("projectDescription", e.target.value)
                    }
                    placeholder="Briefly describe your project idea (minimum 100 characters)"
                    rows={5}
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg font-medium focus:outline-none p-4 resize-y min-h-[150px]"
                    required
                    minLength={100}
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formState.projectDescription.length}/100 characters minimum
                  </p>
                </div>

                {/* Team Size */}
                <div className="grid gap-3">
                  <Label
                    htmlFor="teamSize"
                    className="text-gray-700 dark:text-gray-300 text-lg font-medium"
                  >
                    Team Size <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="teamSize"
                    value={formState.teamSize}
                    onChange={(e) => handleChange("teamSize", e.target.value)}
                    required
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 placeholder:text-gray-400 text-base focus:outline-none p-4 appearance-none"
                  >
                    <option value="" disabled>
                      Select team size
                    </option>
                    <option value="1">Individual (1 member)</option>
                    <option value="2">2 members</option>
                    <option value="3">3 members</option>
                    <option value="4">4 members</option>
                    <option value="5">5 members</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Registration"}
                </Button>

                {isSuccess && (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Registration submitted successfully!</span>
                  </div>
                )}

                {/* Login Link */}
                <div className="text-center mt-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-semibold">
                      Login here
                    </Link>
                  </p>
                </div>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  By submitting, you agree to the terms and conditions of the SparkVenture Challenge
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
