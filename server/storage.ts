import { users, type User, type InsertUser, type ContactRequest, type InsertContactRequest } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactRequests: Map<number, ContactRequest>;
  currentId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.currentId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactId++;
    // Create proper contact request object to match ContactRequest type
    const contactRequest: ContactRequest = {
      id,
      firstName: request.firstName,
      lastName: request.lastName, 
      email: request.email,
      company: request.company || null,
      service: request.service,
      message: request.message,
      createdAt: request.createdAt || new Date()
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }
}

export const storage = new MemStorage();
