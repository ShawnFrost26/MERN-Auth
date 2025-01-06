import { brevoClient, sender } from "../brevo/brevo.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
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
    // console.log("Verification email sent successfully");
  } catch (error) {
    // console.error("Error sending verification email:", error);
    throw new Error(`Email delivery failed: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const emailContent = new brevo.SendSmtpEmail();
    emailContent.subject = "Welcome aboard! Your account is ready to use.";
    emailContent.htmlContent = WELCOME_EMAIL_TEMPLATE.replace(
      "{name}",
      name
    ).replace(
      "{welcomeImageURL}",
      "https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5598.jpg?t=st=1735996956~exp=1736000556~hmac=46a199c0e73cc4b815345b3a40eb6d23b8bde2e423328285388bee892e90c7fa&w=740"
    );

    emailContent.sender = sender;
    emailContent.to = [{ email: email, name: name }];
    emailContent.headers = {
      "X-Mailin-tag": "welcome-email",
    };

    const response = await brevoClient.sendTransacEmail(emailContent);
    // console.log("Welcome email sent successfully");
  } catch (error) {
    // console.error("Error sending verification email:", error);
    throw new Error(`Email delivery failed: ${error.message}`);
  }
};

export const sendForgotPasswordEmail = async (email, name, resetURL) => {
  try {
    const emailContent = new brevo.SendSmtpEmail();
    emailContent.subject = "Reset your password";
    emailContent.htmlContent = PASSWORD_RESET_REQUEST_TEMPLATE.replace(
      "{name}",
      name
    ).replace("{resetURL}", resetURL);
    emailContent.sender = sender;
    emailContent.to = [{ email: email, name: name }];
    emailContent.headers = {
      "X-Mailin-tag": "forgot-password",
    };

    const response = await brevoClient.sendTransacEmail(emailContent);
    // console.log("Verification email sent successfully");
  } catch (error) {
    // console.error("Error sending verification email:", error);
    throw new Error(`Email delivery failed: ${error.message}`);
  }
}
