function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")

    let res = ""
    
    for(let atleta of atletas){
        res += `<div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${atleta.nome}</a>
        </h2>
        <p class="descricao-meta">${atleta.descricao}</p>
        <p><a href="${atleta.link}" target="_blank">Mais Informações</a></p>
        </div>`
    
    }
    
    section.innerHTML = res
}

