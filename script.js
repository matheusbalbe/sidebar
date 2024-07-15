let btn = document.querySelector("#btnMenu");
let botoesDoMenu = document.querySelectorAll(".btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".icon_search");
const logo = document.querySelector(".logo");
const textoDosBotoes = document.querySelectorAll(".btnTexto");
const perfil = document.querySelector(".profile_content");
const fotoENome = document.querySelector(".profile");
const inputDePesquisa = document.querySelector("#pesquisa");
const formDePesquisa = document.querySelector("#busca");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("ativo");
  logo.classList.toggle("none");
  textoDosBotoes.forEach((btna) => btna.classList.toggle("reduzido"));
  botoesDoMenu.forEach((btn) => btn.classList.toggle("reduzido"));
  inputDePesquisa.classList.toggle("reduzido");
  formDePesquisa.classList.toggle("reduzido");
  perfil.classList.toggle("reduzido");
  fotoENome.classList.toggle("reduzido");
});

// searchBtn.onclick = function () {
//   sidebar.classList.toggle("active");
// };
