var skillsEl = document.getElementById("skills-list");
// skillsEl - referinta
// skillsEl.style.color = "red";
// skillsEl.style.fontSize = "25px";

// var oldText = skillsEl.innerHTML;
// skillsEl.innerHTML = oldText + "<li> JS </li>";

// skillsEl.innerHTML = skillsEl.innerHTML + "<li> JS </li>";

// skillsEl.innerHTML += '<li class="favorite">HTML</li>';
// skillsEl.innerHTML += '<li class="favorite">CSS</li>';
// skillsEl.innerHTML += "<li> JS </li>";

var skills = ["HTML", "CSS", "JS", "Drive"];

// skillsEl.innerHTML +=
//   "<li>" +
//   skills[0] +
//   "</li>" +
//   "<li>" +
//   skills[1] +
//   "</li>" +
//   "<li>" +
//   skills[2] +
//   "</li>";

var skillsHTML = "";

// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;

var i = 0;
for (i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

// SCOATE SCRIPT DIN SLIDE SI PUNE-L IN ALT FISIER examples.js

// function getInfo(name) {
//   var msg = "Hello " + name + ", " + "welcome to FastTrackIT!";
//   return msg;
// }
// var info = getInfo("Fiona");
// console.info(info);
