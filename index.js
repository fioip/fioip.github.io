var skills = [];

const r1 = fetch("skills.json");
r1.then((raspuns) => {
  var r2 = raspuns.json();
  r2.then((skills) => {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map(
    (skill) =>
      `<li>  ${skill.name}   ~  <span> ${skill.endorcements} </span> </li>`
  );
  const skillsEl = document.getElementById("skills-list");
  skillsEl.innerHTML = skillsHTML.join("");
}

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
  const pages = document.querySelectorAll(".page");
  pages.forEach((page, i) => {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

// console.info(displayPage, typeof displayPage);

// const displayPage = function (id) {
//   hideAllPages();
//   show(id);
// };

const f1 = function () {
  return "arrow";
};

const f2 = () => {
  return "arrow";
};

// console.info(displayPage, typeof displayPage);

displayPage("skills");

function displayPage(id) {
  hideAllPages();
  show(id);
}

function darkTheme() {
  if (document.getElementById("remember").checked) {
    document.body.classList.add("darkTheme");

    document.getElementById("imageMain").style.display = "none";
    document.getElementById("imageHover").style.display = "block";
  } else {
    document.body.classList.remove("darkTheme");

    document.getElementById("imageHover").style.display = "none";
    document.getElementById("imageMain").style.display = "block";
  }
}

function initMenu() {
  document.getElementById("top-menu-bar").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      // var id = e.target.getAttribute("data-page");
      const id = e.target.dataset.page;
      displayPage(id);
    }
  });
}

displayPage("home");
initMenu();

// TODO add local storage
// document.getElementById("remember").checked = true;
darkTheme();
