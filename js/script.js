//show quiz and hide start quiz button
function startQuiz() {
  document.getElementById("startQuiz").setAttribute("class", "hidden");
  document.getElementById("startQuiz").removeEventListener("click", startQuiz);
  let quiz = document.getElementById("quiz");
  quiz.removeAttribute("class");
  quiz.addEventListener("submit", processData);
}

//change answer button functionality, hides output and shows quiz
function changeAnswers() {
  document.getElementById("quiz").removeAttribute("class");
  document.getElementById("output").setAttribute("class", "hidden");
}

//takes the data and changes it to make it show a response
function processData(event) {
  event.preventDefault();
  document.getElementById("quiz").setAttribute("class", "hidden");
  let answer1 = document.querySelector("input[name='question1']:checked").value;
  let answer2 = document.querySelector("input[name='question2']:checked").value;
  let answer3 = document.querySelector("input[name='question3']:checked").value;
  let answer4 = document.querySelector("input[name='question4']:checked").value;
  let answer5 = document.querySelector("input[name='question5']:checked").value;

  // console.log("answer1: " + answer1);
  // console.log("answer2: " + answer2);
  // console.log("answer3: " + answer3);
  // console.log("answer4: " + answer4);
  // console.log("answer5: " + answer5);

  document.getElementById("outputText").innerText = "You should learn " + languagePicker(answer1, answer2, answer3, answer4, answer5);

  document.getElementById("output").removeAttribute("class");
  document.getElementById("resetOutput").removeAttribute("class");
  document.getElementById("output").addEventListener("reset", changeAnswers);
}

//branching for languages, returns a language
function languagePicker(answer1, answer2, answer3, answer4, answer5){
  if (answer1 === "option2" && answer2 === "option2" && answer3 === "option2" && answer4 === "option2" && answer5 === "option2") {
    return "C++";
  }
  else if(answer1 === "option1" && answer2 === "option2" && answer3 === "option3" && answer4 === "option2" && answer5 === "option3"){
    return "Assembly";
  }
  else if(answer1 === "option3" && answer2 === "option1" && answer3 === "option1" && answer4 === "option1" && answer5 === "option1") {
    return "Kotlin";
  }
  else if(answer1 === "option2" && answer2 === "option3" && answer3 === "option1" && answer4 === "option3" && answer5 === "option1") {
    return "GO";
  }
  else{
  return "Java";
  }
}

//wait for loading of page before running anything
window.addEventListener("load", function () {
  this.document.getElementById("startQuiz").addEventListener("click", startQuiz);
});