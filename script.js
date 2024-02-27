const inputSlider = document.getElementById("inputSlider");
const slideValue = document.getElementById("slideValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("copyIcon");


const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols ="!@#$%^&*()_=+-[]{}|:;`~'\?><,./";


slideValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",() =>{
    slideValue.textContent = inputSlider.value;
})

generateBtn.addEventListener("click",()=>{
    passBox.value = generatePasswor();
})

function generatePasswor(){
    
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for(let i = 0; i < length; i++){

        password += characters.charAt(Math.floor(Math.random()* characters.length));
        console.log(password);
    }

    return password;

}

copyIcon.addEventListener("click", ()=>{
    if(passBox.value != "" || passBox.value.length>= 10){

        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";

        setTimeout(()=>{

            copyIcon.innerHTML = "content_copy";
        }, 2000)
    }
});

