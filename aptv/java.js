let produtos = [];

function adicionarProduto() {
  const produto = document.getElementById('produto').value;
  const tempo = document.getElementById('tempo').value;
  produtos.push({ produto, tempo });
  atualizarPlanilha();
}

function atualizarPlanilha() {
  const tabela = document.getElementById('planilha');
  tabela.innerHTML = `
    <tr>
      <th>Produto</th>
      <th>Tempo de Embalagem (minutos)</th>
    </tr>
  `;
  produtos.forEach(p => {
    const linha = tabela.insertRow();
    const celulaProduto = linha.insertCell();
    const celulaTempo = linha.insertCell();
    celulaProduto.textContent = p.produto;
    celulaTempo.textContent = p.tempo;
  });
}