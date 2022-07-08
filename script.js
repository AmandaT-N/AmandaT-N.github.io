/* .js files add interaction to your website */

var thanksChance = document.getElementById("thanks-chance"); /*text to be changed*/
var yesButton = document.getElementById("chance"); /*button*/

/* pressing the yes button*/
function appearThanks(){
  thanksChance.innerHTML="Feminism: 'Thanks for giving me a chance.'";
}

if (yesButton){
  yesButton.addEventListener("click", appearThanks);
}

/*button at the end */

var letIn = document.getElementById("let-in");
var endButton = document.getElementById("end");

/* pressing the yes button*/
function appearEnd(){
  letIn.innerHTML="Feminism: 'Thanks for letting me in. Now, share with your loved ones.'";
}

if (endButton){
  endButton.addEventListener("click", appearEnd);
}

/* script generator*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML="Hey! It's " + name + ", from " + location + ". I just took the time to learn about feminism from this cool, interactive site: https://feminism-is-at-your-door.amandatn.repl.co/takeaction.html. I had a 'conversation with feminism' and learned many things. For example, I learned that " + learning + ". Please check it out! It would mean a lot.";
}

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/
