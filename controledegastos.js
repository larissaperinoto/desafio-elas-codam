//* 1° passo: CAPTURAR VALORES *//
//* 2° passo: ARMAZENAR OS VALORES *//
//* 3° passo: FAZER O CALCULO *//
//* 4° passo: ATUALIZAR A interface *//

const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
};

const campoEntradaOrcamento = document.querySelector ('.entrada_orcamento input'); 
const buttonOrcamento = document.querySelector ('.entrada_orcamento button');

buttonOrcamento.addEventListener('click', capturarValorOrcamento); 

function capturarValorOrcamento(){
    const valorOrcamento = Number(campoEntradaOrcamento.value);

    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;
    
    atualizarInterface()
}

const campoNomeDespesa = document.querySelector ('.entrada_despesa_nome');
const campoValorDespesa = document.querySelector ('.entrada_despesa_valor');
const buttonDespesa = document.querySelector ('.entrada_despesa button');


buttonDespesa.addEventListener('click', capturarValorDespesa);
function capturarValorDespesa(){
    const nomeDespesa = campoNomeDespesa.value;
    const valorDespesa = Number(campoValorDespesa.value);

    controleGastos.despesas += valorDespesa;
    controleGastos.saldo -= valorDespesa;
    
    atualizarInterface();

    adicionarDespesaInterface (nomeDespesa, valorDespesa);

    campoNomeDespesa.value = ''
    campoValorDespesa.value = ''
}


const orcamento = document.querySelector('.resultado_orcamento p');
const despesa = document.querySelector('.resultado_despesa p');
const saldo = document.querySelector('.resultado_saldo p');
    
function atualizarInterface(){
    orcamento.innerText = `+R$ ${controleGastos.orcamento}`;
    despesa.innerText = `-R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
    console.log(controleGastos);
}

const listaDespesas = document.querySelector('.despesas_lista');

function adicionarDespesaInterface(nomeDespesa, valorDespesa){
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    
    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;
    img.src="lix.jpg" 
    img.alt = 'Icone Lixeira';
    
    img.addEventListener('click', removerDespesa);
    
    li.dataset.valor = valorDespesa;
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);
    
    listaDespesas.appendChild(li);
}

function removerDespesa(evento){
    const despesaClicada = evento.target.parentNode;
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);
    
    controleGastos.despesas -= valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada;

    atualizarInterface ();
    despesaClicada.remove ();
}

