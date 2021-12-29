function tamanhoDoInput(){
    return input.value.length      //função que vê o tamanho do input
}

const criarTarefa =(evento) => {

    evento.preventDefault ()

    const lista = document.querySelector('[data-linha]')
    const input = document.querySelector('[data-input]')


    // criar o elemento e colocar o valor do input dentro do elemento criado
    const tarefa = document.createElement('li')
    const valor = input.value      
    const conteudo = `<p class = "conteudo" >${valor}</p>`   
    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    tarefa.appendChild(BotaoConclui())   
    input.value = " "
    
}

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('botao-conclui')
    botaoConclui.innerText='concluir'
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

const novaTarefa = document.querySelector('[data-botao]')
novaTarefa.addEventListener('click', criarTarefa )