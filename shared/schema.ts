import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  company: true,
  service: true,
  message: true,
  createdAt: true,
});

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;

export const internApplications = pgTable("intern_applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  education: text("education").notNull(),
  university: text("university").notNull(),
  role: text("role").notNull(),
  experience: text("experience").notNull(),
  resumeLink: text("resume_link"),
  portfolio: text("portfolio"),
  coverLetter: text("cover_letter").notNull(),
  heardFrom: text("heard_from"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertInternApplicationSchema = createInsertSchema(internApplications).pick({
  fullName: true,
  email: true,
  phone: true,
  education: true,
  university: true,
  role: true,
  experience: true,
  resumeLink: true,
  portfolio: true,
  coverLetter: true,
  heardFrom: true,
});

export type InsertInternApplication = z.infer<typeof insertInternApplicationSchema>;
export type InternApplication = typeof internApplications.$inferSelect;
