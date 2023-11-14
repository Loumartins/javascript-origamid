// Adicione a classe ativo a todos os itens do menu
const ativoMenu = document.querySelectorAll(".menu a");

ativoMenu.forEach(function (item) {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

ativoMenu.forEach((item) => {
  item.classList.remove("ativo");
});

ativoMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  const possuiAtributo = item.hasAttribute("alt");
  console.log(possuiAtributo);
});

// Modifique o href do link externo no menu
const modificandoHref = document.querySelector("a[href^='http']");
modificandoHref.classList.remove("href");
modificandoHref.setAttribute("href", "https//:www.google.com");
console.log(modificandoHref);
