import { Resend } from "resend";
import { ENV } from "./env.js";

const resend = new Resend(ENV.Resend_api_key);

export const sendEmail = async (email, subject, message) => {
  try {
    await resend.emails.send({
      from: "kritimaan classes<noreply@kritimaanclasses.com>", 
      to: email,
      subject: subject,
      text: message,
    });
    console.log("✅ Email sent successfully to:", email);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

