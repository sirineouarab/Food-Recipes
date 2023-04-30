//Afficher 3 recettes aleatoires à chaque refresh
var i = Math.floor(Math.random() * 12);
do {
  var j = Math.floor(Math.random() * 12);
} while (j == i);
do {
  var k = Math.floor(Math.random() * 12);
} while (k == i || k == j); //le do while sert à mettre des recette differentes (pas la meme pour les 3)
document.getElementById("recette1").innerHTML = recettesDB[i].name;
document.getElementById("image1").src = recettesDB[i].image;
document.getElementById("recette2").innerHTML = recettesDB[j].name;
document.getElementById("image2").src = recettesDB[j].image;
document.getElementById("recette3").innerHTML = recettesDB[k].name;
document.getElementById("image3").src = recettesDB[k].image;

// redirection vers la page des details
let recipe1 = document.getElementById("recipe1");
recipe1.addEventListener("click", function () {
  window.location.href = "details.html?recette=" + i;
});
let recipe2 = document.getElementById("recipe2");
recipe2.addEventListener("click", function () {
  window.location.href = "details.html?recette=" + j;
});
let recipe3 = document.getElementById("recipe3");
recipe3.addEventListener("click", function () {
  window.location.href = "details.html?recette=" + k;
});

//le menu de navbar dans la version des telephones
function menu() {
  let nav = document.getElementById("menu");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
    nav.style.position = "fixed";
    nav.style.width = "80vw";
  }
}
function contact() {
  document.getElementById("menu").style.display = "none";
}
