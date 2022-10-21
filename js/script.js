function startQuiz(event){
  event.preventDefault();
  document.getElementById("quiz").removeAttribute("class");
}
window.addEventListener("load", function () {
    this.document.getElementById("startQuiz").addEventListener("click", startQuiz)
});