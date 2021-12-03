// document.getElementById("count-el").innerText = 5

let countEL = document.getElementById("count-el")
let count = 0
function increment(){
  count ++
  countEL.innerText = count
}


let saveEL = document.getElementById("result")
function save(){
  saveEL.innerText += '-' + count
  count = 0 
  countEL.innerText = count
}


let welcomeEL = document.getElementById("welcome") 
let name = 'Cutie '
let greeting =', welcome back!'
welcomeEL.innerText = name + greeting
// function countdown(h) {
//   var i = h
//   while (i > 0) {
//     console.log(i);
//     i--;
//   } 
// }
welcomeEL.innerText += '😋'
// countdown(5)
