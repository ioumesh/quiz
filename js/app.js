window.onload=function(){
show(0);
}

let questions = [
    {
        id: 1,
        question: "what is the full form of RAM?",
        answer: "Random Acess Memory",
        options: [
            "Random Acess Memory",
            "Run Accept Memory",
            "Randomely Acess Memory",
            "none of these"
        ]
    },
    {
        id: 2,
        question: "what is the full form of ISRO?",
        answer: "Indian Space Research Organization",
        options: [
            "Indian Scientific Research Organization",
            "International Safety Research Organization",
            "International Satellite Research Organization",
            "Indian Space Research Organization"
        ]
    },
    {
        id: 3,
        question: "what is the full form of SIM?",
        answer: "Subscribers Identity Module",
        options: [
            "Subscribers Identity Module",
            "Subscribers Identity Mechanism",
            "Self Identity Module",
            "Self Identity Machine"
        ]
    },
    {
        id: 4,
        question: "what is the full form of CFL?",
        answer: "Compact Fluorescent Lamp",
        options: [
            "Compact Fluorescent Lamp",
            "Chemical Fluorescent Lamp",
            "Condensed Fluorescent Lamp",
            " Centrally Fixed Lamp"
        ]
    },

];

function submitform(e) {
    e.preventDefault();
    var name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";

}
let question_counter=0;
let point=0;

function next(){
   
    let user_answer=document.querySelector("li.option.active").innerHTML;
    if(user_answer==questions[question_counter].answer){
        point+=10;
        sessionStorage.setItem("points", point);
    }
    if(question_counter==questions.length-1){
        location.href="end.html";s
    }
    
    question_counter++;
    show(question_counter);
}

function show(count){
let question=document.getElementById("question_quiz");
// java script vanila method
// question.innerHTML="<h2>"+questions[count].question+ "</h2>";
// javascript ejs method
question.innerHTML=`<h2>Q${question_counter+1}. ${questions[count].question}</h2>

<ul class="option_group">
<li class="option">${questions[count].options[0]}</li>
<li class="option">${questions[count].options[1]}</li>
<li class="option">${questions[count].options[2]}</li>
<li class="option">${questions[count].options[3]}</li>
</ul>

`
 toggleactive();
}

function toggleactive(){
let toggle=document.querySelectorAll("li.option");
for(let i=0; i<toggle.length; i++){
    toggle[i].onclick=function(){
        for(let j=0 ; j<toggle.length; j++){
            if(toggle[j].classList.contains("active")){
                toggle[j].classList.remove("active");
            }
        }
        toggle[i].classList.add("active");
    }
}
}