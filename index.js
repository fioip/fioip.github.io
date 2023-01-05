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

function hideAllPages() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("photography").style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function displayHome() {
  hideAllPages();
  show("home");
}

function displaySkills() {
  hideAllPages();
  show("skills");
}

function displayLanguages() {
  hideAllPages();
  show("languages");
}

function displayPhotography() {
  hideAllPages();
  show("photography");
}

displayHome();
