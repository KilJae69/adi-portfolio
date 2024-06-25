"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "./utils";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(FormData: FormData) {
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  try {
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "adi.toromanovic@outlook.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (!response.data || response.error) {
      throw new Error(response?.error?.message || "Email sending failed");
    }

    return { data: response.data };
  } catch (error: unknown) {
    console.error("Error in sendEmailAction:", error);
    return { error: getErrorMessage(error) };
  }

}
