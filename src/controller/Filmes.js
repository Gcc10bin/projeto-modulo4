class Filmes{
   static rotas(app){
    app.get('/', (req, res)=>{
        res.status(200).send('Rota principal rodando')
       
        
    })
    
    app.get('/filmes', (req, res)=>{
        res.status(200).json(filmes)
        
    })
    
    app.post('/filmes', (req, res) =>{
        filmes.push(req.body)
        res.status(201).send('Filme cadastrado com sucesso')
    })
   }

}