const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector('body');
const imagemBotaoTrocaDetema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivado = body.classList.contains("modo-escuro");

  if (modoEscuroAtivado) {
    body.classList.remove("modo-escuro");
    imagemBotaoTrocaDetema.setAttribute("scr", "./src/imagens/sun.png");

  } else {
    body.classList.add("modo-escuro");
    imagemBotaoTrocaDetema.setAttribute("scr", "./src/imagens/moon.png");
  }
});