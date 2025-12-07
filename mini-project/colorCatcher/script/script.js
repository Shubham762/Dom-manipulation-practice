let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "hotpink",
    "orange",
    "violet",
    "black",
    "gray",
    "purple",
    "lightgreen",
    "maroon",
    "Khaki",
    "navy",
    "indigo",
    "olive",
  ];
const grid=document.getElementById("grid");
const targetColorDisplay=document.getElementById("target-color");
const scoreDisplay=document.getElementById("id");
const timeDisplay=document.getElementById("time");
function shuffleArray(colors) {
    for(let i=colors.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        let temp=colors[i];
        colors[i]=colors[j];
        colors[j]=temp;
    }
    return colors;
}
function createGrid() {
    grid.innerHTML="";
    colors=shuffleArray(colors);
    targetColor=colors[Math.floor(Math.random()*colors.length)];
    targetColorDisplay.textContent=targetColor;
    colors.forEach((color)=>{
        const box=document.createElement("div");
        box.className="color-box";
        box.style.backgroundColor=color;
        box.addEventListener("click",()=>{handleClick(color)});
        grid.appendChild(box);
    })
}
function handleClick(color){
    if(color===targetColor){
        score++;
        scoreDisplay.textContent=score;
        createGrid();
    }
}
function startGame() {
  score = 0;
  time = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = time;
  createGrid();
  clearInterval(timer);
  timer=setInterval(()=>{
    time--;
    timeDisplay.textContent=time;
    if(time===0){
        clearInterval(timer);
        alert("⏳Time's Up! your final score is: "+score);
    }
  },1000);
}

let darkbtn=document.getElementById("dark");
let lightbtn=document.getElementById("light");
darkbtn.addEventListener("click",darkMode);
lightbtn.addEventListener("click",lightMode);

function lightMode(){
    document.body.style.backgroundColor="#f0f0f0";
    let gc=document.querySelector('.game-container');
    gc.style.backgroundColor="white"
    gc.style.color="black";
}
function darkMode(){
    document.body.style.backgroundColor="#33333";
    let gc=document.querySelector('.game-container');
    gc.style.backgroundColor="black"
    gc.style.color="white";
}