"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeadingWithLine from "../headline/Headline";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual email integration later
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="w-full  mx-auto max-w-7xl py-12 md:py-20 px-4 md:px-0">
      <HeadingWithLine
        title="Contact Us"
        color="text-black"
        lineColor="bg-[#D0D5DD]"
        align="left"
        className="mb-8 text-lg"
      />
      <div className="mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Column - Image */}
          <div className="hidden md:block h-full">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/contact-us-image.png"
                alt="Professional writing and planning"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full p-8 border border-[#EAECF0] rounded-2xl shadow-2xl bg-background flex flex-col justify-center">
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-lg border border-[#EAECF0] text-foreground placeholder:text-muted-foreground bg-background transition-colors ${
                      errors.name
                        ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive"
                        : "border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-lg border border-[#EAECF0]  text-foreground placeholder:text-muted-foreground bg-background transition-colors ${
                      errors.email
                        ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive"
                        : "border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border border-[#EAECF0] text-foreground placeholder:text-muted-foreground bg-background resize-none transition-colors ${
                      errors.message
                        ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive"
                        : "border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm font-medium text-green-800">
                      ✓ Message sent successfully! We'll be in touch soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-medium text-red-800">
                      ✗ Error sending message. Please try again.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full hover:bg-[#0052CC] bg-[#004B8D] text-white font-semibold py-6 rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Image - shown only on mobile */}
        <div className="md:hidden mt-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/contact-us-image.png"
              alt="Professional writing and planning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
