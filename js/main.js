function hello(nome) {
  let mensagem = nome.firstElementChild.innerText
  let numero = prompt('Qual é o número?')
  
  url = `https://api.whatsapp.com/send?phone=55${numero}&text=${mensagem}`

  window.open(url)
}
