import { brevoClient, sender } from "../brevo/brevo.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import brevo from "@getbrevo/brevo";

export const sendVerificationEmail = async (email, name, verificationToken) => {
  try {
    const emailContent = new brevo.SendSmtpEmail();
    emailContent.subject = "Verify Your Email";
    emailContent.htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    );
    emailContent.sender = sender;
    emailContent.to = [{ email: email, name: name }];
    emailContent.headers = {
      "X-Mailin-tag": "email-verification",
    };

    const response = await brevoClient.sendTransacEmail(emailContent);
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Email delivery failed: ${error.message}`);
  }
};
