let tituloBebida
let tituloPrato
let tituloSobremesa

function escolherPrato(prato) {
  const produtoClicado = document.querySelector('.secao1 .selecionado')

  if (produtoClicado !== null) {
    produtoClicado.classList.remove('selecionado')
  }
  prato.classList.add('selecionado')
  tituloPrato = prato.querySelector('.titulo-prato').innerHTML
  const precoPrato = prato.querySelector('.preco-prato').innerHTML
  habilitarBotao()
  console.log(tituloPrato, precoPrato)
}

function escolherBebida(bebida) {
  const produtoClicado = document.querySelector('.secao2 .selecionado')

  if (produtoClicado !== null) {
    produtoClicado.classList.remove('selecionado')
  }
  bebida.classList.add('selecionado')
  tituloBebida = bebida.querySelector('.titulo-bebida').innerHTML
  const precoBebida = bebida.querySelector('.preco-bebida').innerHTML
  habilitarBotao()
  console.log(tituloBebida, precoBebida)
}

function escolherSobremesa(sobremesa) {
  const produtoClicado = document.querySelector('.secao3 .selecionado')

  if (produtoClicado !== null) {
    produtoClicado.classList.remove('selecionado')
  }
  sobremesa.classList.add('selecionado')
  tituloSobremesa = sobremesa.querySelector('.titulo-sobremesa').innerHTML
  const precoSobremesa = sobremesa.querySelector('.preco-sobremesa').innerHTML
  habilitarBotao()
  console.log(tituloSobremesa, precoSobremesa)
}

function habilitarBotao() {
  if (
    tituloPrato !== undefined &&
    tituloBebida !== undefined &&
    tituloSobremesa !== undefined
  ) {
    console.log('Você pode fazer o pedido')
    const botaoFecharPedido = document.querySelector('.botao')
    botaoFecharPedido.classList.add('ativado')
    botaoFecharPedido.innerHTML = 'Fazer pedido'
  }
}
