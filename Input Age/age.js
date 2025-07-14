const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if( age == 0){
        result.textContent = "You can't enter this website kid!"
    }
    else if(age >= 1 && age <= 18){
        result.textContent = "You are not allowed to use this website! Only 18+ are allowed to use this website!"
    }
    else if( age >= 18 && age < 100){
        result.textContent = "You are allowed to watch this! Enjoy the show.."
    }
    else if( age >= 100){
        result.textContent = "You are too Old to view this website! Better die soon..'jk'"
    }
    else{
        result.textContent = "Better don't visit this website, coz there's no website exist."
    }
}