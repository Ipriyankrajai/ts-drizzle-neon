import { db } from "./db";
import { UserTable } from "./schema";

async function main() {
  // await db.insert(UserTable).values({firstName: 'John', lastName: 'Doe'})

  const users = await db.select().from(UserTable);
  console.log("Hello World!", users);
}

main();
