const a=document.getElementById("heading1");
const b=document.getElementsByTagName("h1");
const c=document.getElementsByClassName("c1");
const d=document.querySelector("#heading1");  // for query selctor we have to use # for id and . from class name
const e=document.querySelector(".c1");  // if we have multiple class name then query selctor gives only the first tag where the first calls name it is there
const f=document.querySelectorAll(".c1")
console.log(a);
console.log(b[0]);
console.log(b[1]);
console.log(c)

a.innerText="Welcome";
b[1].innerText="shubham";
c[1].innerText="first of all you know";

a.style.color="red";
document.body.style.backgroundColor="yellow";
document.body.style.color="blue";
d.style.fontFamily="cursive";
e.style.color="green";
f[0].style.color="pink";
f[1].style.color="gray";

const g=document.createElement("h2");
g.innerText="this h2 tag is created by js";
document.body.appendChild(g);


const h=document.getElementsByClassName("c2");
console.log(h[0]);
 h[0].remove();

const j=document.createElement("h4");
j.innerText="this h4 tag is created by js";
const i=document.getElementsByTagName("p")[0].appendChild(j);

function handleDark(){
    document.body.style.backgroundColor="gray"
}
function handleLight(){
    document.body.style.backgroundColor="white"
}

let butttons=document.getElementsByTagName("button");
// butttons[0].addEventListener("click",handleDark);
// butttons[1].addEventListener("click",handleLight);


butttons[0].addEventListener("click",function(){
    document.body.style.backgroundColor="gray"
})
 butttons[1].addEventListener("click",function(){
    document.body.style.backgroundColor="white"
 })