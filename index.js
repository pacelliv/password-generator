const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = [];
let passwordTwo = [];

const myPopUpOne = document.getElementById("myPopUpOne")

const firstPassword = document.getElementById("field-text-one");
const secondPassword = document.getElementById("field-text-two");
let password = false;

function generate () {
    if(password === false) {
        generatePasswords();
    }
}

function generatePasswords() {

        for (let i = 0; i < 15; i++) {
            let randomIndexOne = Math.floor(Math.random()*characters.length);
            let randomIndexTwo = Math.floor(Math.random()*characters.length);      
            passwordOne.push(characters[randomIndexOne]);
            passwordTwo.push(characters[randomIndexTwo]);
        }
        for (let i = 0; i < passwordOne.length; i++) {
            firstPassword.textContent += passwordOne[i];
            secondPassword.textContent += passwordTwo[i];
        }
        
    password = true;
}

function refresh() {
    
    if(password === true) {
        firstPassword.textContent = "";
        secondPassword.textContent = "";
        passwordOne = [];
        passwordTwo = [];
    }
    password = false;
}

function copyOne(that) {
    const inputEl = document.createElement('input');
    inputEl.value = that.textContent
    document.body.appendChild(inputEl)
    inputEl.select();
    document.execCommand('copy',false);
    inputEl.remove();
    myPopUpOne.classList.toggle('show');
}

function copyTwo(that) {
    const inputEl = document.createElement('input');
    inputEl.value = that.textContent
    document.body.appendChild(inputEl)
    inputEl.select();
    document.execCommand('copy',false);
    inputEl.remove();
    myPopUpTwo.classList.toggle('show');
}

