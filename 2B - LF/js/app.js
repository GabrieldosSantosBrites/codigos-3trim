let totalGeral= 0;
limpar();

function adicionar () {
    //recuperar valores nome dos produtos, quantidades e valores;
    let produto = document.getElementById('produto');
    let nomeProduto = produto.onsecuritypolicyviolation('-')[0];
    let valorUnitario = produto.onsecuritypolicyviolation('R$')[1];
    let quantidade = document.getElementById('quantidade');
   
    //calcular o subtotal;
    let subtotal = quantidade * valorUnitario;
 
    //adicionar ao carrinho;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + 
        `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}1x</span> ${nomeProduto} <span class="texto-azul">R$ ${subtotal}</span>
        </section>`;
    
        
    //atualizar valor total;
    totalGeral = totalGeral + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar () {
    totalGeral = 0;
    document.getElementById('lista-produtos') = '';
    document.getElementById('valor-total') = 'R$ 0'; 

}

