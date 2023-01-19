var skillsEl = document.getElementById("skills-list");

// var skills = [
//   ["HTML", 5],
//   ["CSS", 3],
//   ["JS", 15],
//   ["PHP", 7],
//   ["Bootstrap", 20],
// ];
//var endorcements = [5, 6, 5, 1];

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 7 },
  { name: "JS", endorcements: 15 },
  { name: "PHP", endorcements: 8 },
  { name: "Bootstrap", endorcements: 2 },
];

var skillsHTML = "";

var i = 0;
for (i = 0; i < skills.length; i++) {
  skillsHTML +=
    "<li>" + skills[i].name + " ~ " + skills[i].endorcements + "</li>";
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
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        // var id = e.target.getAttribute("data-page");
        var id = e.target.dataset.page;
        displayPage(id);
      }
    });
}

displayPage("skills");
initMenu();
