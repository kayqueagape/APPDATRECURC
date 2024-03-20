
let codigoAnterior = null;
let tempoInicial = null;



function registrarTempo() {
    const codigoAtual = document.getElementById('codigoBarras').value;
    const tempoAtual = new Date().getTime();

    if (codigoAnterior === codigoAtual) {
        const tempoDecorrido = (tempoAtual - tempoInicial) / 1000; // em segundos
        adicionarLinhaTabela(codigoAtual, tempoDecorrido);
        codigoAnterior = null;
    } else {
        codigoAnterior = codigoAtual;
        tempoInicial = tempoAtual;
    }
}


function adicionarLinhaTabela(codigo, tempo) {
    const tabela = document.getElementById('tabelaProdutos');
    const linha = tabela.insertRow();
    const celulaCodigo = linha.insertCell(0);
    const celulaTempo = linha.insertCell(1);
    const celulaDataHora = linha.insertCell(2);

    celulaCodigo.textContent = codigo;
    celulaTempo.textContent = tempo.toFixed(2);
    celulaDataHora.textContent = new Date().toLocaleString();
}


const codigosRegistrados = new Set();



function registrarTempo() {
    const codigoAtual = document.getElementById('codigoBarras').value;
    const tempoAtual = new Date().getTime();

    if (codigoAnterior === codigoAtual) {
        const tempoDecorrido = (tempoAtual - tempoInicial) / 1000; 
        adicionarLinhaTabela(codigoAtual, tempoDecorrido);
        codigoAnterior = null;
    } else {
        if (codigosRegistrados.has(codigoAtual)) {
            alert('Este código já foi registrado anteriormente.');
            
        } else {
            codigoAnterior = codigoAtual;
            tempoInicial = tempoAtual;
            codigosRegistrados.add(codigoAtual); 
        }
    }
}


