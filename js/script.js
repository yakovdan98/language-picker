function startQuiz() {
  document.getElementById("startQuiz").setAttribute("class", "hidden");
  document.getElementById("startQuiz").removeEventListener("click", startQuiz);
  let quiz = document.getElementById("quiz");
  quiz.removeAttribute("class");
  quiz.addEventListener("submit", processData);
}

function changeAnswers() {
  document.getElementById("quiz").removeAttribute("class");
  document.getElementById("output").setAttribute("class", "hidden");
}
function processData(event) {
  event.preventDefault();
  document.getElementById("quiz").setAttribute("class", "hidden")
  let response = document.getElementById("output");
  response.removeAttribute("class");
  document.getElementById("output").addEventListener("reset", changeAnswers);
}

window.addEventListener("load", function () {
  this.document.getElementById("startQuiz").addEventListener("click", startQuiz);
});