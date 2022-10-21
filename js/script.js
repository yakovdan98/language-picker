function startQuiz() {
  document.getElementById("jumbotron").setAttribute("class", "jumbotron hidden");
  let quiz = document.getElementById("quiz")
  quiz.removeAttribute("class");
  quiz.addEventListener("submit", processData);
}

function processData(event) {
  event.preventDefault();
  document.getElementById("quiz").setAttribute("class", "hidden")
  let response = document.getElementById("output");
  response.removeAttribute("class");
}

window.addEventListener("load", function () {
  this.document.getElementById("startQuiz").addEventListener("click", startQuiz)
});