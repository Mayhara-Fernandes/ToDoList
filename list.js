const lista = document.querySelector('[data-linha]'); //vai na ul
const input = document.querySelector('[data-input]'); //vai no input



   
      //função que vê o tamanho do input


function criarElementoNaLIsta (evento){
     const tamanho = input.value.length;
    if (tamanho > 0){
        
        evento.preventDefault ()

        const tarefa = document.createElement('li');
        const valor = input.value;
        const conteudo = `${valor}`;  
        tarefa.innerHTML = conteudo;
        tarefa.classList.add('content')

        lista.appendChild(tarefa)
        input.value= "";  
   
        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
    } 



}
//click no botão Novo item

const novaTarefa = document.querySelector('[data-botao]')
novaTarefa.addEventListener('click', criarElementoNaLIsta )



   
//botões de concluir e deletar


const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('botao-conclui')
    botaoConclui.innerText = 'concluir '
    botaoConclui.addEventListener('click', concluirTarefa)
        

    return botaoConclui
}

const concluirTarefa = (evento)=> {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('botao-deleta')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click',deletarTarefa ) 
   
   return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()
    return botaoDeleta
}
