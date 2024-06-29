import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const CatagoryTable = pgTable("catagory", {
  id: uuid("id").defaultRandom().notNull(),
  name: varchar("name", { length: 100 }).notNull(),
});
