
import {pgTable, uuid ,varchar} from "drizzle-orm/pg-core"

 export const UserTable = pgTable("user",{
    id: uuid("id").primaryKey().defaultRandom(),
    firstName: varchar("first_name",{length:25}).notNull(),
    lastName: varchar("last_name",{length:25}),
 })