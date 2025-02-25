"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setLoginState((prev) => ({
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
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <main className="bg-gradient-to-b from-background to-background/80 text-foreground min-h-screen py-24 mt-[-65px]">
      <div className="container mx-auto px-6">
        <Card className="max-w-md mx-auto bg-white/90 dark:bg-gray-800/90 border-none shadow-2xl">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-primary text-3xl font-bold">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={loginState.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg focus:outline-none p-6"
                  required
                />
              </div>
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
                  value={loginState.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Enter your password"
                  className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 text-lg focus:outline-none p-6"
                  required
                />
              </div>
              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary/70 text-lg py-6 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Login"}
                </Button>
                {isSuccess && (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    <span>Logged in successfully!</span>
                  </div>
                )}
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary font-semibold">
                  Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
