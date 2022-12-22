var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive", "Photoshop"];

var skillsHTML = "";

var i = 0;
for (i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;
