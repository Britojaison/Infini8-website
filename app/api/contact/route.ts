import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is not set, log and return success (for development)
    if (!process.env.RESEND_API_KEY) {
      console.log(`Contact form submission from: ${email}`);
      console.log(`Email should be sent to: tech@88gb.in`);
      console.log("Note: Set RESEND_API_KEY in your .env.local file to enable email sending");
      return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    // Send email to tech@88gb.in using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "tech@88gb.in",
      subject: "New Contact Form Submission",
      html: `<p><strong>${email}</strong> wants to connect with you.</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

