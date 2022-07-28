import express, { application } from "express";
import * as dotenv from "dotenv";


dotenv.config()
const app = express();

/* transformar o que está sendo enviado nas declarações em json */
app.use(express.json())

const filmes = [
    {id: 1, 'titulo': 'senhor dos aneis'},
    {id: 2, 'tutulo': 'o hobbit'}
]


export default app