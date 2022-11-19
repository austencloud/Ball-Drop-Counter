let number1 = 0
let number2 = 0
let screen1El = document.getElementById("screen1")
let screen2El = document.getElementById("screen2")
window.addOneDrop = addOneDrop
window.addTwoDrops = addTwoDrops
window.addThreeDrops = addThreeDrops
window.resetDrops = resetDrops
window.addOneCatch = addOneCatch
window.addTwoCatches = addTwoCatches
window.addThreeCatches = addThreeCatches
window.resetCatches = resetCatches

// DROPS //
function addOneDrop(){
    number1 += 1
    screen1El.innerText = number1
}
function addTwoDrops(){
    number1 += 2
    screen1El.innerText = number1
}
function addThreeDrops(){
    number1 += 3
    screen1El.innerText = number1
}
function resetDrops(){
    screen1El.textContent = "0"
    number1 = 0
}
// CATCHES //
function addOneCatch(){
    number2 += 1
    screen2El.innerText = number2
}
function addTwoCatches(){
    number2 += 2
    screen2El.innerText = number2
}
function addThreeCatches(){
    number2 += 3
    screen2El.innerText = number2
}
function resetCatches(){
    screen2El.textContent = "0"
    number2 = 0
}
