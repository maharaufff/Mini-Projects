const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove",(event)=>{
  const xpos = event.offsetX;
  const ypos = event.offsetY;
  const spanE1 = document.createElement("span");
  spanE1.style.left = xpos + "px";
  spanE1.style.top = ypos + "px";
  const size = Math.random()*100;
  spanE1.style.width = size + "px";
  spanE1.style.height = size + "px";
  spanE1.style.text = "Proud";
  bodyE1.appendChild(spanE1);
  setTimeout(()=>{
    spanE1.remove();
  },3000);
});

const containerE1 = document.querySelector(".container");

const careers = ["Stay Strongg", "be consistentt","you're doing greatt","best of luckk"];

 let careerindex = 0;
 let characterindex = 0;

updateText()

function updateText(){
containerE1.innerHTML = `
<h1>${careers[careerindex].slice(0,characterindex)}</h1>`;
characterindex++
if(characterindex=== careers[careerindex].length){
  careerindex++
  characterindex = 0;
}
if(careerindex===careers.length){
  careerindex = 0;
}
setTimeout(updateText,400);
}
