import { rejects } from "assert";
import { resolve } from "path";
import Database from "../infra/Database.js";

class FilmesMetodos{

    static activePragma(){
     
        const pragma = "PRAGMA foreing_keys = ON"
        Database.run(pragma, (e) => {
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras, ativas.")
            }
        })
    }

    static createTable(){
    this.activePragma()
        const query = `
        
        CREATE TABLE IF NOT EXISTS 
        filmes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR
            
            )
        
        `
            return new Promise((resolve, reject) => {
                Database.run(query, (e) => {
                    if(e){
                        reject(e.message)
                    }else{
                        resolve()
                    }
                })
            })
    }

    static inserirFilme(filme){
        const query = `INSERT INTO filmes (titulo) VALUES (?)`
        
        const body = Object.values(filme)
        return new Promise((resolve, reject) => {
            Database.run(query,[...body], (e) =>{
                if(e){
                    reject(e.message)
                }else{
                    resolve({error: false, message: 'Filme cadastrado com sucesso!'})
                }
            })
        })
    }

    static listarTodosFilmes(){
        const query = ` SELECT * FROM filmes`
        return new Promise((resolve, reject)=> {
            Database.all(query, (e, resultado)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve(resultado)
                }
            })
        })
    }


}


export default FilmesMetodos