let pass_field = document.getElementById("password-field")
let pass_field2 = document.getElementById('password-field2')

document.getElementById("password-field").addEventListener("click", function () {
  copyToClipboard("password-field");
});

document.getElementById("password-field2").addEventListener("click", function () {
  copyToClipboard("password-field2");
});

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rand_char = []
let rand_char2 = []

 // generate a password using the characters array at the top
function generate_pass(){
  for(let i = 0; i<15; i++){
    rand_char[i] = characters[Math.floor(Math.random()* characters.length)]
    rand_char2[i] = characters[Math.ceil(Math.random()* characters.length)]
  } 
  pass_field.value = rand_char.join('')
  pass_field2.value = rand_char2.join('')
}

function copyToClipboard(fieldId) {
  const inputField = document.getElementById(fieldId);
  inputField.select(); // Select the text in the field
  inputField.setSelectionRange(0, 99999); // For mobile devices

    try {
    const successful = document.execCommand("copy");
    if (successful) {
      showCopyMessage(); // Show feedback if successful
    } else {
      console.error("Copy command was unsuccessful.");
    }
  } catch (err) {
    console.error("Failed to copy text using fallback method: ", err);
   }
}

function showCopyMessage() {
  const message = document.getElementById("copy-message");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 1600); // Hide message after 2 seconds
}