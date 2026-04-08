import 'dotenv/config';

const required = ['PORT', 'JWT_SECRET', 'DATABASE_URL'];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`${key} environment variable is required`);
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL
};
