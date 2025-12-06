interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date;
    id:string
}

(function () {
    // helper para selecionar elementos
    const $ = <T extends HTMLElement>(query: string): T | null =>
        document.querySelector<T>(query);

    const formatarData = (data: Date) =>
        data.toLocaleString('pt-BR');

    // módulo do pátio
    const patio = (() => {
        const tabela = $('#patio') as HTMLTableSectionElement | null;

        function ler(): Veiculo[] {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }

        function salvar(veiculos: Veiculo[]) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }

        function adicionar(veiculo: Veiculo, salva?: boolean) {
            if (!tabela) return;

            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${formatarData(veiculo.entrada)}</td>
                <td><button class="remover" data-id="${veiculo.id}">X</button></td>
            `;
            row.querySelector('.remover')?.addEventListener('click', function () {
                remover(this.dataset.id || '');
            });
            tabela.appendChild(row);
            $('#patio')?.appendChild(row);
            if (salva) salvar([...ler(), veiculo]);
        }

        function remover(id: string) {
            const { entrada, nome } = ler().find(veiculo => veiculo.id === id)
            const tempo = entrada ? new Date().getHours() - new Date(entrada).getHours() : 0;
            if (!confirm(`O veículo ${nome} permaneceu por ${tempo} horas. Deseja encerrar?`)) return;
            salvar(ler().filter(veiculo => veiculo.id !== id));
            render();
        }

        

        function render() {
            $('#patio')!.innerHTML = '';
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
        }
    }

        return { ler, adicionar, remover, salvar, render };
    })();

    patio.render();
    $('#cadastrar')?.addEventListener('click', () => {
        const nomeInput  = $('#nome') as HTMLInputElement | null;
        const placaInput = $('#placa') as HTMLInputElement | null;

        const nome = nomeInput?.value.trim();
        const placa = placaInput?.value.trim();

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
        if (nomeInput) nomeInput.value = '';
        if (placaInput) placaInput.value = '';
    });
})();
