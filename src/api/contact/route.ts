
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(150),
  message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please enter valid contact information." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      subject,
      message,
    } = parsed.data;

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!smtpUser || !smtpPassword || !contactEmail) {
      console.error("Missing email environment variables.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: contactEmail,
      replyTo: {
        name,
        address: email,
      },
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Unable to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
