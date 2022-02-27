
document.getElementById("submit-btn").addEventListener('click', madlib);


let userInput = document.getElementsByTagName('input');
function getUserInput(){
for (let j=0; j < userInput.length; j++){
console.log(userInput[j].value);

}
}


let displayFinal = document.getElementById("display-finished-lib");
function madlib(){ 
 let h3 = document.createElement('h3');
 h3.textContent = 'A Day At The Zoo!';
 displayFinal.appendChild(h3);
 
 let p = document.createElement('p');  
 p.textContent = `Today I went to the zoo. I saw a(n)
 ${userInput[0].value} 
 ${userInput[1].value} jumping up and down in its tree.
 He ${userInput[2].value} ${userInput[3].value}
 through the large tunnel that led to its ${userInput[4].value}
 ${userInput[4].value}. I got some peanuts and passed
 them through the cage to a gigantic gray ${userInput[6].value}
 towering above my head. Feeding that animal made
 me hungry. I went to get a ${userInput[7].value} scoop
 of ice cream. It filled my stomach. Afterwards I had to
 ${userInput[8].value} ${userInput[9].value} to catch our bus.
 When I got home I ${userInput[10].value} my
 mom for a ${userInput[11].value} day at the zoo. ` ;
displayFinal.appendChild(p);

let div = document.getElementById('formDiv')
div.classList.remove('formDiv');
div.classList.add('notActive');

displayFinal.classList.remove('notActive');
displayFinal.classList.add('active');
}


let activeListToggle = document.getElementsByTagName('li');    
function showQuestions (){    
for(let i = 0; i < activeListToggle.length-1; i++){
    activeListToggle[i].lastElementChild.addEventListener('click', function nextQuestion(){
        if(activeListToggle[i].className === 'active'){
            activeListToggle[i].classList.remove('active');
            activeListToggle[i].classList.add('notActive'); 
            console.log( activeListToggle[1]);
            getUserInput();
            
            activeListToggle[i+1].classList.remove('notActive');
            activeListToggle[i+1].classList.add('active');
            
        }else if (activeListToggle[i].className === 'notActive'){
            activeListToggle[i].classList.toggle('active');
        }
        
    })

}
}

showQuestions ();




