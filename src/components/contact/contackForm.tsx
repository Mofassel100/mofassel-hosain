
"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, LoaderCircle, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);

 
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setLoading(true);
  setFeedback("");
  setSuccess(false);

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      console.error(
        "Contact API returned a non-JSON response:",
        response.status,
        await response.text()
      );

      throw new Error(
        response.status === 404
          ? "Contact API not found. Check src/app/api/contact/route.ts."
          : `Server returned an unexpected response (HTTP ${response.status}).`
      );
    }

    const data: { message?: string } = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message.");
    }

    setSuccess(true);
    setFeedback(data.message || "Message sent successfully!");
    form.reset();
  } catch (error) {
    setSuccess(false);

    setFeedback(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
}


  return (
    <section id="contact" className="w-full py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s work together
          </h2>

          <p className="max-w-lg leading-7 text-muted-foreground">
            Have a project, job opportunity, or an idea? Send me a message.
            I&apos;d love to hear from you.
          </p>

          <div className="flex items-center gap-3 pt-3">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <Mail className="size-6" />
            </div>
            <div>
              <p className="font-medium">Email me : <span className="text-blue-400">mofassel6145@gmail.com</span></p>
              <p className="text-sm text-muted-foreground">
                Use the contact form to reach me directly.
              </p>
            </div>
          </div>
        </div>

        <Card className="border-border/60 shadow-lg">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>
              Fill in the form below and I&apos;ll get your message by email.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Mofassel "
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mofassel6145@gmail.com"
                  maxLength={254}
                  autoComplete="email"
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  minLength={3}
                  maxLength={150}
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="min-h-32 resize-y"
                  minLength={10}
                  maxLength={5000}
                  required
                  disabled={loading}
                />
              </div>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`flex items-center gap-2 text-sm ${
                    success ? "text-green-600" : "text-destructive"
                  }`}
                >
                  {success && <CheckCircle2 className="size-4" />}
                  {feedback}
                </p>
              )}

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <LoaderCircle className="mr-2 size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 size-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
