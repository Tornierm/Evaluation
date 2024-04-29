"use server";
import { db } from "./drizzle/db"
import { UserTable } from "./drizzle/schema"

export const insert = async () => {
    return await db.insert(UserTable).values({
      name: "kyle",
    })
  }

  export const pull = async () => {
    return await db.query.UserTable.findFirst()
  }