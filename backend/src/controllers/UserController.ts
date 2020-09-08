import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Jaziel", email: "jaziel@example.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Jaziel", email: "jaziel@example.com" },
      message: { subject: "Test Email", body: "Seja bem-vindo" },
    });

    return res.send();
  },
};
