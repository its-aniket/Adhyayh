// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  contactRequests;
  internApplications;
  currentId;
  currentContactId;
  currentInternApplicationId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactRequests = /* @__PURE__ */ new Map();
    this.internApplications = /* @__PURE__ */ new Map();
    this.currentId = 1;
    this.currentContactId = 1;
    this.currentInternApplicationId = 1;
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContactRequest(request) {
    const id = this.currentContactId++;
    const contactRequest = {
      id,
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      company: request.company || null,
      service: request.service,
      message: request.message,
      createdAt: request.createdAt || /* @__PURE__ */ new Date()
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }
  async createInternApplication(application) {
    const id = this.currentInternApplicationId++;
    const internApplication = {
      id,
      fullName: application.fullName,
      email: application.email,
      phone: application.phone,
      education: application.education,
      university: application.university,
      role: application.role,
      experience: application.experience,
      resumeLink: application.resumeLink || null,
      portfolio: application.portfolio || null,
      coverLetter: application.coverLetter,
      heardFrom: application.heardFrom || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.internApplications.set(id, internApplication);
    return internApplication;
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, service, message } = req.body;
      if (!firstName || !lastName || !email || !service || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      const contactRequest = await storage.createContactRequest({
        firstName,
        lastName,
        email,
        company,
        service,
        message,
        createdAt: /* @__PURE__ */ new Date()
      });
      console.log(`New contact form submission from ${firstName} ${lastName} (${email})`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      res.status(200).json({
        message: "Contact form submitted successfully",
        id: contactRequest.id
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app2.post("/api/internships/apply", async (req, res) => {
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
      if (!fullName || !email || !phone || !education || !university || !role || !experience || !coverLetter) {
        return res.status(400).json({ message: "Missing required fields" });
      }
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
      console.log(`New internship application from ${fullName} (${email})`);
      console.log(`Role: ${role}`);
      console.log(`Education: ${education} at ${university}`);
      res.status(200).json({
        message: "Internship application submitted successfully",
        id: application.id
      });
    } catch (error) {
      console.error("Error processing internship application:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
