import brevo from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

let apiInstance = new brevo.TransactionalEmailsApi();
let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY;

export const brevoClient = apiInstance;

export const sender = {
  email: "professor2602@gmail.com", 
  name: "Sourav Barik", 
};
