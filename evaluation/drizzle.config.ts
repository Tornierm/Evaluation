import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./app/drizzle/schema.ts",
    out: "./app/drizzle/migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
})