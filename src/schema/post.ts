import { pgTable, real, time, uuid, varchar } from "drizzle-orm/pg-core";
import { UserTable } from "./user";

export const PostTable = pgTable("post", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 255 }).notNull(),
  averageRating: real("average_rating").notNull().default(0),
  createdAt: time("created_at").defaultNow().notNull(),
  updateddAt: time("updated_at").defaultNow().notNull(),
  authorId: uuid("author_id").references(() => UserTable.id, {
    onDelete: "cascade",
  }),
});
