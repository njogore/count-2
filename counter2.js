
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel1 = document.getElementById("countLabel1");
 let count = 0;
 increaseBtn.onclick = function(){
    count++;
    countLabel1.textContent = count;
 }
 decreaseBtn.onclick = function(){
    count--;
    countLabel1.textContent = count;
 }
 resetBtn.onclick = function(){
    count = 0;
    countLabel1.textContent = count;
 }
