//Affichages de toutes recettes dans le catalogue
for (let i = 0; i < recettesDB.length; i++) {
  let recette = document.createElement("div");
  recette.classList.add("recette");
  let img = document.createElement("img");
  img.src = recettesDB[i].image;
  let name = document.createElement("h3");
  name.innerHTML = recettesDB[i].name;
  let cat = document.createElement("p");
  cat.innerHTML = "category : " + recettesDB[i].category;
  let cout = document.createElement("p");
  cout.innerHTML = "country : " + recettesDB[i].country;
  let dur = document.createElement("p");
  dur.innerHTML = "duration : " + recettesDB[i].duration;
  let note = document.createElement("p");

  //calculons la note global
  var j = 0,
    somme = 0;
  while (j < recettesDB[i].comments.length) {
    somme = somme + recettesDB[i].comments[j].rating;
    j++;
  }
  let averageNote = somme / recettesDB[i].comments.length;
  if (Number.isInteger(averageNote)) {
    note.innerHTML = "note globale : " + averageNote;
  } else {
    note.innerHTML = "note globale : " + averageNote.toFixed(1);
  }

  recette.appendChild(img);
  recette.appendChild(name);
  recette.appendChild(cat);
  recette.appendChild(cout);
  recette.appendChild(dur);
  recette.appendChild(note);

  document.getElementsByClassName("list")[0].appendChild(recette);
  recette.style = "margin-bottom: 50px";
}

//recherche d'une recette par son nom
let val = document.getElementById("search");
val.onkeyup = function () {
  let query = val.value.toLowerCase();
  for (let i = 0; i < recettesDB.length; i++) {
    let recipe = recettesDB[i];
    if (recipe.name.toLowerCase().includes(query)) {
      document.getElementsByClassName("recette")[i].style.display = "block";
    } else {
      document.getElementsByClassName("recette")[i].style.display = "none";
    }
  }
  document.getElementById("catego").innerHTML = "Search Result : " + query;
};

/*affichage des recette d'une category
on declare dabord un tableaux des categories qu'on a*/

let categories = [
  "Petit déjeuner",
  "Déjeuner",
  "Dîner",
  "Plat principal",
  "Entrée",
  "Plat",
];
let option = document.getElementById("categories");
option.addEventListener("change", function () {
  document.getElementById("catego").innerHTML = "Category : " + option.value;
  for (let i = 0; i < categories.length; i++) {
    if (option.value == categories[i]) {
      for (var j = 0; j < recettesDB.length; j++) {
        if (recettesDB[j].category != categories[i]) {
          document.getElementsByClassName("recette")[j].style.display = "none";
        } else {
          document.getElementsByClassName("recette")[j].style.display = "block";
        }
      }
    }
  }
  if (option.value == "All") {
    for (var j = 0; j < recettesDB.length; j++) {
      document.getElementsByClassName("recette")[j].style.display = "block";
    }
  }
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

// redirection vers la page des details
for (let i = 0; i < recettesDB.length; i++) {
  let recipe = document.getElementsByClassName("recette")[i];
  recipe.addEventListener("click", function () {
    window.location.href = "details.html?recette=" + i;
  });
}

function contact() {
  document.getElementById("menu").style.display = "none";
}
