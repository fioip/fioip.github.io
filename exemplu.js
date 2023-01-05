console.info("Page loaded");
console.error(2 * 3 + 1);
console.warn(2 * (3 + 1));

var employed = false;
console.info("Employed?", employed);
console.info("Type of var:", typeof employed);

var age = 18;
console.info("Age?", age);
console.info("Type of var:", typeof age);

var userName = "Fiona";
userName = "Riana " + userName;
console.info("Username:", userName);
console.info("Type of var:", typeof userName);

var skills = ["html", "css", "js"];
console.info("Skills?", skills);
console.info("Type of var:", typeof skills);

var fio = {
  age: 18,
  employed: true,
  skills: ["html", "css", `js`],
};

var jobTitle = document.getElementById("job-title");
// jobTitle = dom - document object model
