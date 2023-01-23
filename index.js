var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 7 },
  { name: "JS", endorcements: 15 },
  { name: "PHP", endorcements: 8 },
  { name: "Bootstrap", endorcements: 2 },
];

var skillsHTML = skills.map(function (skill) {
  return `<li>  ${skill.name}   ~  <span> ${skill.endorcements} </span> </li>`;
});

skillsEl.innerHTML = skillsHTML.join("");

var skillsElP = document.getElementById("skills-list-photo");

var skillsP = [
  { name: "Wedding" },
  { name: "Macro" },
  { name: "Christening" },
  { name: "Portrait" },
  { name: "Landscape" },
  { name: "Festivals" },
];

var skillsHTMLP = skillsP.map(function (skillP) {
  return `<li>  ${skillP.name}  </li>`;
});

skillsElP.innerHTML = skillsHTMLP.join("");

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

function darkTheme() {
  if (document.getElementById("remember").checked) {
    document.getElementById("content").style.background = "#1E1F1F";
    document.getElementById("header-wrapper").style.background = "#1f7067";
    document.getElementById("top-menu-bar").style.background = "#02211D";
    document.getElementById("page-left").style.background = "#3E4343";
    document.getElementById("home").style.background = "#3E4343";
    document.getElementById("skills").style.background = "#3E4343";
    document.getElementById("languages").style.background = "#3E4343";
    document.getElementById("photography").style.background = "#3E4343";
    document.getElementById("rubik").style.background = "#3E4343";
    document.getElementById("main-text").style.color = "white";
    document.getElementById("main-text").style.color = "white";

    document.getElementById("imageMain").style.display = "none";
    document.getElementById("imageHover").style.display = "block";
  } else {
    document.getElementById("content").style.background = "#f3f2ef";
    document.getElementById("header-wrapper").style.background = "#34dbc8";
    document.getElementById("top-menu-bar").style.background = "#0d685e";
    document.getElementById("page-left").style.background = "white";
    document.getElementById("home").style.background = "white";
    document.getElementById("main-text").style.color = "black";

    document.getElementById("imageHover").style.display = "none";
    document.getElementById("imageMain").style.display = "block";
  }
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

displayPage("home");
initMenu();
