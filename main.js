let arrowImg = document.querySelectorAll(".arrowImg");
let answer = document.querySelectorAll(".answer");
let question = document.querySelectorAll(".question");
let hiddenDiv = document.querySelectorAll(".hiddenDiv");
let activeElement = null;
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    for (let j = 0; j < answer.length; j++) {
      if (j == i) {
        answer[j].classList.toggle("addClass");
        arrowImg[j].style.transform = "scaley(-1)";
        if (activeElement && activeElement !== answer[j]) {
          activeElement.classList.remove("addClass");
          arrowImg[j].style.transform = "";
        }
      }
      activeElement = answer[j];
    }
  });
}
