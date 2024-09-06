function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (!campoPesquisa){
        section.innerHTML = "<p>Nenhum atleta/esporte foi encontrado!</p>"
        return
    }
    
    let res = ""
    let nome = ""
    let desc = ""
    let tags = ""
    for(let atleta of atletas){
        nome = atleta.nome.toLowerCase()
        desc = atleta.descricao.toLowerCase()
        tags = atleta.tags.toLowerCase()
        if (nome.includes(campoPesquisa) || desc.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            res += `<div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${atleta.nome}</a>
            </h2>
            <p class="descricao-meta">${atleta.descricao}</p>
            <p><a href="${atleta.link}" target="_blank">Mais Informações</a></p>
            </div>`
        }
    }

    if (!res){
        res = "<p>Nada foi encontrado. Você não procurou nenhum atleta/esporte.</p>"
    }
    section.innerHTML = res
}

