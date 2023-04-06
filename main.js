const form = document.querySelector('form')
linhas = ''
const numeros = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    novoContato();
})

function adicionarLinha(){
    const telefone = document.getElementById('telefone')
    const nome = document.getElementById('nome')

    if(numeros.includes(telefone.value)){
        alert('Esse telefone já foi cadastrado')
    }else{
        numeros.push(telefone.value)

        let linha = '<tr>'
        linha += `<td> ${nome.value} </td>`
        linha += `<td> ${telefone.value} </td>`
        linha += '</tr>'
        linhas += linha 
    
        nome.value = ''
        telefone.value = ''
    }
}

function novoContato(){
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = linhas
}