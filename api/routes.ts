import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  
  // Internship application submission endpoint
  app.post("/api/internships/apply", async (req, res) => {
    try {
      const { 
        fullName, 
        email, 
        phone, 
        education, 
        university, 
        role, 
        experience, 
        resumeLink, 
        portfolio, 
        coverLetter, 
        heardFrom 
      } = req.body;
      
      // Validate required input
      if (!fullName || !email || !phone || !education || !university || !role || !experience || !coverLetter) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Store internship application in memory
      const application = await storage.createInternApplication({
        fullName,
        email,
        phone,
        education,
        university,
        role,
        experience,
        resumeLink,
        portfolio,
        coverLetter,
        heardFrom
      });
      
      // Log the application details
      console.log(`New internship application from ${fullName} (${email})`);
      console.log(`Role: ${role}`);
      console.log(`Education: ${education} at ${university}`);
      
      // Return success response
      res.status(200).json({ 
        message: "Internship application submitted successfully",
        id: application.id
      });
    } catch (error) {
      console.error("Error processing internship application:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
