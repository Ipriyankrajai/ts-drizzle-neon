import { boolean, pgTable, uuid } from "drizzle-orm/pg-core";
import { UserTable } from "./user";

export const UserPreferencesTable = pgTable("user_preferences", {
  id: uuid("id").primaryKey().defaultRandom(),
  emailUpdate: boolean("email_update").default(false).notNull(),
  userId: uuid("user_id")
    .references(() => UserTable.id)
    .notNull(),
});
