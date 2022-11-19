let number1 = 0
let number2 = 0
let screen1El = document.getElementById("screen1")
let screen2El = document.getElementById("screen2")

// DROPS //
function addOneDrop(){
    number1 += 1
    console.log(number1)
    screen1El.innerText = number1
}
function addTwoDrops(){
    number1 += 2
    console.log(number1)
    screen1El.innerText = number1
}
function addThreeDrops(){
    number1 += 3
    console.log(number1)
    screen1El.innerText = number1
}
function resetDrops(){
    screen1El.textContent = "0"
    number1 = 0
}
// CATCHES //
function addOneCatch(){
    number2 += 1
    console.log(number2)
    screen2El.innerText = number2
}
function addTwoCatches(){
    number2 += 2
    console.log(number2)
    screen2El.innerText = number2
}
function addThreeCatches(){
    number2 += 3
    console.log(number2)
    screen2El.innerText = number2
}
function resetCatches(){
    screen2El.textContent = "0"
    number2 = 0
}
