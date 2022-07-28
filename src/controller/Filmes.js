import FilmesModel from "../models/FilmesModel.js";
import FilmesMetodos from "../DAO/FilmesMetodos.js";
import Database from "../infra/Database.js";



FilmesMetodos.createTable()

class Filmes{
    static rotas(app){
        app.get("/filmes", async (req,res)=>{
            const response = await FilmesMetodos.listarTodosFilmes()
            res.status(200).json(response)
        })

        app.get("/filmes/:id", async (req, res)=>{
            try {
                const filme = await FilmesMetodos.listarFilmePorId(req.params.id)
                 if(!filme){
                    throw new Error("Filme não encontrado para esse Id")
                }
                res.status(200).json(filme)
            } catch (error) {
                res.status(404).send(error.message)
            }
        })

        app.post("/filmes", async (req, res)=>{

            // const isValid = ValidacoesUsuario.isValid(...Object.values(req.body))

            try {              
                if(isValid){
                    const filme = new FilmesModel(...Object.values(req.body))
                    const response = await FilmesMetodos.inserirFilme(filme)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/filmes/:id", (req, res)=> {
            // const isValid = ValidacoesService.isValid(...Object.values(req.body))

            if(isValid){
                const filme = new FilmesModel(...Object.values(req.body))
                const response = FilmesMetodos.atualizarPorId(req.params.id, filme)
                res.status(201).json(response)
            } else {
                res.status(400).json({Erro:"Erro"})
            }
        })
        

        app.patch("/filmes/:id", (req, res)=>{
            const response = FilmesMetodos.atualizaPropriedadesPorId(req.params.id, req.body)
            res.status(200).json(response)
        })

        app.delete("/filmes/:index", (req, res) => {
            if(ValidacoesService.validaIndex(req.params.index, Database.Filmes)){
                const filme = FilmesMetodos.deletaFilmePorId(req.params.index)
                res.status(200).json(filme)
            } else {
                res.status(404).json({Error: "filme não encontrado"})
            }
        })
    }
}


export default Filmes;