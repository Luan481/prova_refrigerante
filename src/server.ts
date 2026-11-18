import express from "express"
import { refrigeranteRoutes } from "./routes/refrigerante.routes.js"

const port = 3000

const app = express()

app.use(express.json())

app.use("/refrigerantes", refrigeranteRoutes)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))