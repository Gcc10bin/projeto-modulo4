import express from "express";
import * as dotenv from "dotenv"
import Filmes from "./src/controller/Filmes.js"

dotenv.config()

const port =  process.env.PORT || 3002;

const app = express()

app.listen(port, ()=>{
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json())

Filmes.rotas(app)