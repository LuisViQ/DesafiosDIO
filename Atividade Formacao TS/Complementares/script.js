(function () {
    var _a;
    // helper para selecionar elementos
    const $ = (query) => document.querySelector(query);
    const formatarData = (data) => data.toLocaleString('pt-BR');
    // módulo do pátio
    const patio = (() => {
        const tabela = $('#patio');
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function adicionar(veiculo, salva) {
            var _a, _b;
            if (!tabela)
                return;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${formatarData(veiculo.entrada)}</td>
                <td><button class="remover" data-id="${veiculo.id}">X</button></td>
            `;
            (_a = row.querySelector('.remover')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                remover(this.dataset.id || '');
            });
            tabela.appendChild(row);
            (_b = $('#patio')) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(id) {
            const { entrada, nome } = ler().find(veiculo => veiculo.id === id);
            const tempo = entrada ? new Date().getHours() - new Date(entrada).getHours() : 0;
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo} horas. Deseja encerrar?`))
                return;
            salvar(ler().filter(veiculo => veiculo.id !== id));
            render();
        }
        function render() {
            $('#patio').innerHTML = '';
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    })();
    patio.render();
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        const nomeInput = $('#nome');
        const placaInput = $('#placa');
        const nome = nomeInput === null || nomeInput === void 0 ? void 0 : nomeInput.value.trim();
        const placa = placaInput === null || placaInput === void 0 ? void 0 : placaInput.value.trim();
        if (!nome || !placa) {
            alert('Preencha os campos para cadastrar o veículo');
            return;
        }
        patio.adicionar({
            nome,
            placa,
            entrada: new Date(),
            id: Math.random().toString(36).slice(2)
        }, true);
        // limpa os campos
        if (nomeInput)
            nomeInput.value = '';
        if (placaInput)
            placaInput.value = '';
    });
})();
