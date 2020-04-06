const correctAnswers = ["D", "A", "C", "B", "C", "B", "C", "D", "A", "C"];
const form = document.querySelector("form");
let correct = document.querySelectorAll(".correct");
let wrongs = document.querySelectorAll(".wrong");
let explanations = document.querySelectorAll(".explanation");

form.addEventListener("submit", e => {
    e.preventDefault();
    scrollTo(0,1);
    let score = 0;

    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, 
        form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
       
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score+=10;
            correct[index].classList.remove("d-none");
            wrongs[index].classList.add("d-none");
            explanations[index].classList.remove("d-none")
            explanations[index].classList.add("text-success");
            explanations[index].classList.remove("text-danger");
        } else {
            wrongs[index].classList.remove("d-none");
            correct[index].classList.add("d-none");
            explanations[index].classList.remove("d-none")
            explanations[index].classList.add("text-danger");
            explanations[index].classList.remove("text-success");
        }
        
    });

    let scoreBoard = document.querySelector("span");
    document.querySelector(".score").classList.remove("d-none");
    
    let output = 0;
    let timer = setInterval(() => {
        scoreBoard.textContent = `Your score is: ${output}%.`
        if(output === score) {
            clearInterval(timer)
        }else {
            output++;
        }
    },20)

});

