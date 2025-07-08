let output=document.getElementById("container")
output.innerHTML="<h3>welcome</h3>"
let studentName = "Ramesh";
let age = 18;
let isLearningJs = true;
let subjects = ["Math", "Science", "Physics"];
output.innerHTML= `<p><b>Name:</b>${studentName}</p>
<p><b>Age:</b>${age}</p>
<p><b>Learning JS:</b>${isLearningJs===true?"TRUE":"FALSE"}</p>
<p><b>Subjects:</b>${subjects}</p>
`
let id;
function boomboom(){
    countdown.innerHTML=`<h3>boom boom</h3>`
}

function startCountdown(){
    let initialCount=5
    let cd=document.getElementById("countdown-value");
    cd.innerText=initialCount;

    id=setInterval(function()
    {initialCount=initialCount-1;
    cd.innerHTML=initialCount; 
    if (initialCount===0){
        clearInterval(id);
        boomboom();
    }
},1000);
}

function stopCountdown(){
    clearInterval(id);
}

let countdown=document.getElementById("countdown");
countdown.innerHTML=`<h2>countdown timer</h2>
<button onclick="startCountdown()">START </button>
<button onclick="stopCountdown()">STOP </button>
`


