//Pegando os elementos
const btn = document.querySelector("#btnMenu");
const botoesDoMenu = document.querySelectorAll(".btn");
const sidebar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(".icon_search");
const logo = document.querySelector(".logo");
const textoDosBotoes = document.querySelectorAll(".btnTexto");
const perfil = document.querySelector(".profile_content");
const fotoENome = document.querySelector(".profile");
const inputDePesquisa = document.querySelector("#inputDePesquisa");
const formDePesquisa = document.querySelector("#busca");

// Função para retrair o menu
// Quando o ícone para retrair for clicado, será adicionada a classe "reduzido" aos elementos e eles serão encurtados pelas configurações postas no css
btn.addEventListener("click", function () {
  sidebar.classList.toggle("reduzido");
  logo.classList.toggle("reduzido");
  textoDosBotoes.forEach((btn) => btn.classList.toggle("reduzido"));
  botoesDoMenu.forEach((btn) => btn.classList.toggle("reduzido"));
  inputDePesquisa.classList.toggle("reduzido");
  formDePesquisa.classList.toggle("reduzido");
  perfil.classList.toggle("reduzido");
  fotoENome.classList.toggle("reduzido");
});
