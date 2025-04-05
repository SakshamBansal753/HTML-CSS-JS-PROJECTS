let atext=document.querySelector("#a_text");
let btext=document.querySelector("#b_text");
let ctext=document.querySelector("#c_text");
let dtext=document.querySelector("#d_text");
let quiz =document.querySelector("#quiz");
let question=document.querySelector("#question");
let answer=document.querySelectorAll(".answer")
let submit=document.querySelector("#submit")
const quizdata=[
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
let currentquiz=0;
let score=0;
function loadQuiz(){
    deselectanswer();
    const currentquizdata=quizdata[currentquiz]
question.innerText=currentquizdata.question;
atext.innerText = currentquizdata.a
    btext.innerText = currentquizdata.b
    ctext.innerText = currentquizdata.c
    dtext.innerText = currentquizdata.d


}
function deselectanswer(){
    answer.forEach(answer=>answer.checked=false)
}
loadQuiz();
function select(){
    let answerel
    answer.forEach(answer=>{
        if(answer.checked){
            answerel=answer.id;
        }

    });
    return answerel;
}
submit.addEventListener("click",()=>{
    const answerel=select();
    if(answerel){
        if(answerel===quizdata[currentquiz].correct){
          score++;
        }
    
    currentquiz++
    if(currentquiz<quizdata.length){
        loadQuiz();
    }else{
        quiz.innerHTML=`
        <h2> YOU ANSWERED ${score}/${quizdata.length} question correct</h2>
        <button onclick="location.reload()">RELOAD</button>
        `
    }
}
});
