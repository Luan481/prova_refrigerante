import "dotenv/config"
import knex from "knex"

export const banco = knex({
    client: "pg",
    connection: {},
    debug: true
})