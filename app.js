let adj1 = document.getElementById("adj1");
let nn1 = document.getElementById("nn1");
let vb1 = document.getElementById("vb1");
let avb1 = document.getElementById("avb1");
let adj2 = document.getElementById("adj2");
let nn2 = document.getElementById("nn2");
let nn3 = document.getElementById("nn3");
let adj3 = document.getElementById("adj3");
let vb2 = document.getElementById("vb2");
let avb2 = document.getElementById("avb2");
let vb3= document.getElementById("vb3");
let adj4 = document.getElementById("adj4");

document.getElementById("submit-btn").addEventListener('click', madlib);

let displayFinal = document.getElementById("display-finished-lib");

function madlib(){ 
 let h3 = document.createElement('h3');
 h3.textContent = 'A Day At The Zoo!';
 displayFinal.appendChild(h3);
 
 let p = document.createElement('p');  
 p.textContent = `Today I went to the zoo. I saw a(n)
 ${adj1.value} 
 ${nn1.value} jumping up and down in its tree.
 He ${vb1.value} ${avb1.value}
 through the large tunnel that led to its ${adj2.value}
 ${nn2.value}. I got some peanuts and passed
 them through the cage to a gigantic gray ${nn3.value}
 towering above my head. Feeding that animal made
 me hungry. I went to get a ${adj3.value} scoop
 of ice cream. It filled my stomach. Afterwards I had to
 ${vb2.value} ${avb2.value} to catch our bus.
 When I got home I ${vb3.value} my
 mom for a ${adj4.value} day at the zoo. ` ;
displayFinal.appendChild(p);

}

let nextBtn = document.querySelectorAll("next-btn");

let allBtns = document.querySelector("button"). addEventListener('click', toggleInput);
console.log(allBtns);

function toggleInput (){
for (let i = 0; i <allBtns.length; i++){

    if (allBtns.className === 'active'){
        allBtns.className = 'inactive';
      } else {
        allBtns.className = 'active';
      }

}

}
