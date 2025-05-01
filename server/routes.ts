import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, service, message } = req.body;
      
      // Validate input
      if (!firstName || !lastName || !email || !service || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Store contact request in memory
      const contactRequest = await storage.createContactRequest({
        firstName,
        lastName,
        email,
        company,
        service,
        message,
        createdAt: new Date()
      });
      
      // For a real implementation, you would send an email here
      // This is a mock setup that logs the message without sending real emails
      console.log(`New contact form submission from ${firstName} ${lastName} (${email})`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      
      // Return success response
      res.status(200).json({ 
        message: "Contact form submitted successfully",
        id: contactRequest.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
