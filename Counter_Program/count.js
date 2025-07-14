//Counter program

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const labelCount = document.getElementById("labelCount");

let count = 0;
increaseBtn.onclick = function(){
    count++;
    labelCount.textContent = count;

}
resetBtn.onclick = function(){
    count = 0;
    labelCount.textContent = count;

}
decreaseBtn.onclick = function(){
    count--;
    labelCount.textContent = count;

}
