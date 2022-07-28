import FilmesMetodos from "../DAO/FilmesMetodos.js"


const filmes ={
    id: 1,
    titulo: "Teste de Filme"
}

try {

    const tabela = await FilmesMetodos.createTable()
    console.log(tabela)

    const criada = await FilmesMetodos.inserirFilme(filmes)
    console.log(criada)

} catch (e) {
    console.log(e)
}