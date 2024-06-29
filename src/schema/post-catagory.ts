import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { PostTable } from "./post";
import { CatagoryTable } from "./catagory";

export const PostCatagoryTable = pgTable(
  "post-catagory",
  {
    postId: uuid("post-id")
      .references(() => PostTable.id)
      .notNull(),
    catagoryId: uuid("catagory-id").references(() => CatagoryTable.id),
  },
  (table) => {
    return {
      primaryKey: primaryKey({ columns: [table.postId, table.catagoryId] }),
    };
  }
);
