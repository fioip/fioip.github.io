var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "PHP", "Bootstrap"];

var skillsHTML = "";

var i = 0;
for (i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

var skillsElP = document.getElementById("skills-list-photo");

var skillsP = [
  "Wedding",
  "Macro",
  "Christening",
  "Portrait",
  "Landscape",
  "Festivals",
];

var skillsHTMLP = "";

var i = 0;
for (i = 0; i < skillsP.length; i++) {
  skillsHTMLP += "<li>" + skillsP[i] + "</li>";
}

skillsElP.innerHTML = skillsHTMLP;

function displayHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("known-languages").style.display = "none";
  document.getElementById("photography").style.display = "none";
}

function displaySkills() {
  console.warn("Trebuie sa afisam skills page");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("known-languages").style.display = "none";
  document.getElementById("photography").style.display = "none";
}

function displayLanguages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("known-languages").style.display = "block";
  document.getElementById("photography").style.display = "none";
}

function displayPhotography() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("known-languages").style.display = "none";
  document.getElementById("photography").style.display = "block";
}

displayHome();
