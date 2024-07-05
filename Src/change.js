
//   let first = document.getElementById("topic");
//   first.style.backgroundColor= "purple";
//   first.innerHTML= "you are welcome";

//   let second = document.querySelector("#heading");
//   second.style.color= "yellow";

//   let third = document.getElementById("tab");
//   third.style.padding= "50px"
//   third.style.width= "50%";

//   let forth = document.getElementById("last");
//   forth.style.color= "purple";
//   forth.innerHTML= "See you again soon, bye👋";
//   forth.style.textShadow= "2px 2px 2px white";

function findMe(){
    let pfour = document.getElementById("pfour");
    pfour.style.display = "block";
    pfour.style.backgroundColor= "red";
    pfour.style.color= "white";
    pfour.style.textShadow= '2px 2px 2px black'
    
      }

let pthree = document.getElementById("pthree");
pthree.addEventListener("mouseenter", findMe);
 
function clickEvent(){
    let pone = document.getElementById("pone");
    pone.style.backgroundColor= "purple";
    pone.style.width= "30%";
    pone.style.textShadow= "2px 2px 2px orange";
    pone.style.color= "white";
}

let pone = document.getElementById("pone");
pone.addEventListener("click", clickEvent);

function lEvent(){
      let ptwo = document.getElementById("ptwo");
      ptwo.style.width= "80%";
      ptwo.innerHTML= "Amazing";
      ptwo.style.color= "pink";
      ptwo.style.textShadow= "2px 2px 2px black";
      ptwo.style.border= "10px";
      ptwo.style.borderRadius= "10px";
      ptwo.style.width= "50%";
      ptwo.style.height= "50%";
}

let ptwo = document.getElementById("ptwo");
 ptwo.addEventListener("dblclick", lEvent);



