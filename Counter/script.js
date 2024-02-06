let count = 0;

const counterDisplay = document.getElementById("counter-value");
const upButton = document.getElementById("up-button");
const downButton =document.getElementById("down-button");

upButton.addEventListener("click", function(){
    count++;
    counterDisplay.textContent = count;
});

downButton.addEventListener("click", function(){
    count--;
    counterDisplay.textContent = count;
})