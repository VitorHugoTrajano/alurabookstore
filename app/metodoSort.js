const btnOrdenaPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenaPorPreco.addEventListener("click", ordenarPorPrecos)

function ordenarPorPrecos() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}