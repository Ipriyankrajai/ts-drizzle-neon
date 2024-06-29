import {
  pgTable,
  uuid,
  varchar,
  integer,
  pgEnum,
  index,
} from "drizzle-orm/pg-core";

export const UserRole = pgEnum("user_role", ["ADMIN", "BASIC"]);

export const UserTable = pgTable(
  "user",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 25 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 25 }).notNull().unique(),
    role: UserRole("user_role").default("BASIC").notNull(),
  },
  (table) => {
    return {
      emailIndex: index("emailIndex").on(table.email),
    };
  }
);
