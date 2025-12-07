function lerValores() {
    const nome = document.querySelector('#title');
    const prioridade = document.querySelector('#priority');
    if (!nome || !prioridade) {
        console.error("Elemento não encontrado no HTML");
        return null;
    }
    const id = Math.random().toString(36).slice(2);
    const tarefa = {
        id,
        nome: nome.value,
        prioridade: prioridade.value,
    };
    return tarefa;
}
function adicionarTarefas() {
    const tarefa = lerValores();
    if (!tarefa) {
        return; // evita erro se os elementos forem null
    }
    console.log(tarefa);
    const lista = document.querySelector('#taskList');
    const row = document.createElement('li');
    row.innerHTML = `
        <strong>${tarefa.nome}</strong> 
        <span>[${tarefa.prioridade}]</span>
    `;
    lista.appendChild(row);
}
