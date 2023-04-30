//on recupere le id
const params = new URLSearchParams(window.location.search);
let id = params.get("recette");

document.title = recettesDB[id].name;

//puis on affiche les recettes
document.getElementById("titre").textContent = recettesDB[id].name;
document.getElementById("name").innerHTML += recettesDB[id].name;
document.getElementById("cat").innerHTML += recettesDB[id].category;
document.getElementById("cout").innerHTML += recettesDB[id].country;
document.getElementById("dur").innerHTML += recettesDB[id].duration;
document.getElementById("ing").innerHTML += recettesDB[id].ingredients;
document.getElementById("ins").innerHTML += recettesDB[id].instructions;
document.getElementById("main").src = recettesDB[id].image;
document.getElementById("img1").src = recettesDB[id].img1;
document.getElementById("img2").src = recettesDB[id].img2;
document.getElementById("img3").src = recettesDB[id].img3;

//l'evaluation des recettes
let star1 = document.getElementById("star1");
star1.onmouseover = function () {
  star1.src = "pics/StarFill.png";
};

star1.onmouseout = function () {
  star1.src = "pics/StarOutLine.png";
};

let star2 = document.getElementById("star2");
star2.onmouseover = function () {
  star1.src = "pics/StarFill.png";
  star2.src = "pics/StarFill.png";
};

star2.onmouseout = function () {
  star1.src = "pics/StarOutLine.png";
  star2.src = "pics/StarOutLine.png";
};

let star3 = document.getElementById("star3");
star3.onmouseover = function () {
  star1.src = "pics/StarFill.png";
  star2.src = "pics/StarFill.png";
  star3.src = "pics/StarFill.png";
};

star3.onmouseout = function () {
  star1.src = "pics/StarOutLine.png";
  star2.src = "pics/StarOutLine.png";
  star3.src = "pics/StarOutLine.png";
};

let star4 = document.getElementById("star4");
star4.onmouseover = function () {
  star1.src = "pics/StarFill.png";
  star2.src = "pics/StarFill.png";
  star3.src = "pics/StarFill.png";
  star4.src = "pics/StarFill.png";
};

star4.onmouseout = function () {
  star1.src = "pics/StarOutLine.png";
  star2.src = "pics/StarOutLine.png";
  star3.src = "pics/StarOutLine.png";
  star4.src = "pics/StarOutLine.png";
};

let star5 = document.getElementById("star5");
star5.onmouseover = function () {
  star1.src = "pics/StarFill.png";
  star2.src = "pics/StarFill.png";
  star3.src = "pics/StarFill.png";
  star4.src = "pics/StarFill.png";
  star5.src = "pics/StarFill.png";
};

star5.onmouseout = function () {
  star1.src = "pics/StarOutLine.png";
  star2.src = "pics/StarOutLine.png";
  star3.src = "pics/StarOutLine.png";
  star4.src = "pics/StarOutLine.png";
  star5.src = "pics/StarOutLine.png";
};

function Rate(id) {
  var j = 0,
    somme = 0;
  while (j < recettesDB[id].comments.length) {
    somme = somme + recettesDB[id].comments[j].rating;
    j++;
  }
  let averageNote = somme / recettesDB[id].comments.length;
  if (Number.isInteger(averageNote)) {
    return averageNote;
  } else {
    return averageNote.toFixed(1);
  }
}
document.getElementById("gloablRate").innerHTML = Rate(id);
document.getElementById("gloablRate").style = "color: #fff";

// on change le globale rate quand l'utilisateur click sur une etoile
star1.addEventListener("click", function () {
  var globalRate = document.getElementById("gloablRate");
  globalRate.innerHTML = (parseFloat(globalRate.innerHTML) + 1) / 2;
});
star2.addEventListener("click", function () {
  var globalRate = document.getElementById("gloablRate");
  globalRate.innerHTML = (parseFloat(globalRate.innerHTML) + 2) / 2;
});
star3.addEventListener("click", function () {
  var globalRate = document.getElementById("gloablRate");
  globalRate.innerHTML = (parseFloat(globalRate.innerHTML) + 3) / 2;
});
star4.addEventListener("click", function () {
  var globalRate = document.getElementById("gloablRate");
  globalRate.innerHTML = (parseFloat(globalRate.innerHTML) + 4) / 2;
});
star5.addEventListener("click", function () {
  var globalRate = document.getElementById("gloablRate");
  globalRate.innerHTML = (parseFloat(globalRate.innerHTML) + 5) / 2;
});

// //affichage des commentaires
// for (let i = 0; i < recettesDB[id].comments.length; i++) {
//   let com = document.createElement("div"); //un commentaire
//   com.classList.add("com");

//   let pic = document.createElement("img");
//   let info = document.createElement("div");
//   pic.style = "cursor: pointer";
//   com.appendChild(pic);
//   com.appendChild(info); // un commentaire contient une image + un div info qui contient username et le contenu
//   com.style = "display: flex";

//   pic.src = "pics/ProfilPic.png"; //photo de profile par defaut

//   let nom = document.createElement("h2"); //username
//   nom.style = "cursor: pointer";
//   nom.textContent = recettesDB[id].comments[i].user;
//   let content = document.createElement("p"); //contenu du commentaire
//   content.textContent = recettesDB[id].comments[i].content;
//   let rating = document.createElement("p"); //rating d'une personne de cette recette
//   rating.textContent = recettesDB[id].comments[i].rating;
//   info.appendChild(nom);
//   info.appendChild(content);
//   info.appendChild(rating);
//   info.style = "color: #fff";
//   document.getElementById("comments").appendChild(com);
//   document.getElementById("comments").style = "margin: 50px 260px";
//   if (window.matchMedia("(max-width: 992px)").matches) {
//     document.getElementById("comments").style.margin = "50px 260px";
//   }
// }

// //le menu de navbar dans la version des telephones
// function menu() {
//   let nav = document.getElementById("menu");
//   nav.style.display = "block";
//   nav.style.position = "fixed";
//   nav.style.width = "80vw";
// }

//affichage des commentaires
for (let i = 0; i < recettesDB[id].comments.length; i++) {
  let com = document.createElement("div"); //un commentaire
  com.classList.add("com");

  let pic = document.createElement("img");
  let info = document.createElement("div");
  pic.style = "cursor: pointer";
  com.appendChild(pic);
  com.appendChild(info); // un commentaire contient une image + un div info qui contient username et le contenu
  com.style = "display: flex";

  pic.src = "pics/ProfilPic.png"; //photo de profile par defaut

  let nom = document.createElement("h2"); //username
  nom.style = "cursor: pointer";
  nom.textContent = recettesDB[id].comments[i].user;
  let content = document.createElement("p"); //contenu du commentaire
  content.textContent = recettesDB[id].comments[i].content;
  let rating = document.createElement("p"); //rating d'une personne de cette recette
  rating.textContent = recettesDB[id].comments[i].rating;
  info.appendChild(nom);
  info.appendChild(content);
  info.appendChild(rating);
  info.style = "color: #fff";
  document.getElementById("comments").appendChild(com);
}

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
