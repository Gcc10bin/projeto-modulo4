import express, { application } from "express";

const app = express();

/* transformar o que está sendo enviado nas declarações em json */
app.use(express.json())

const filmes = [
    {id: 1, 'titulo': 'senhor dos aneis'},
    {id: 2, 'tutulo': 'o hobbit'}
]

app.get('/', (req, res)=>{
    res.status(200).send('Rota principal rodando')
    console.log(app)
    
})

app.get('/filmes', (req, res)=>{
    res.status(200).json(filmes)
    console.log(app)
})

app.post('/filmes', (req, res) =>{
    filmes.push(req.body)
    res.status(201).send('Livro cadastrado com sucesso')
})
export default app