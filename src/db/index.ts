import { PrismaClient } from "@prisma/client";

// Declare a global variable type in the TypeScript environment to avoid TypeScript errors
// This ensures that `global.cashedPrisma` is recognized by TypeScript globally.
declare global {
  var cashedPrisma: PrismaClient;
}

// Declare a variable to hold the Prisma client instance
let prisma: PrismaClient;

// Check if the application is running in production mode
if (process.env.NODE_ENV === "production") {
  // If in production, create a new instance of PrismaClient
  prisma = new PrismaClient();
} else {
  // If not in production, check if `global.cashedPrisma` is already defined
  if (!global.cashedPrisma) {
    // If not defined, create a new instance of PrismaClient and assign it to `global.cashedPrisma`
    global.cashedPrisma = new PrismaClient();
  }
  // Use the cached Prisma client instance from the global object
  prisma = global.cashedPrisma;
}

export const db = prisma;
