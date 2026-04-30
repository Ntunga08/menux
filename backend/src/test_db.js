import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");

    const result = await prisma.$queryRaw`SELECT NOW()`;
    console.log("⏰ Current DB time:", result);

  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

