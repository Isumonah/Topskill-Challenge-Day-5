let input = document.getElementById("input")
let submit = document.getElementById("submit")
let numbers = document.getElementById("numbers")
let reverseButton = document.getElementById("reverse")
let reversedNumbers = document.getElementById("reversed-numbers")

let myArray = []
let reversedArray = []
submit.addEventListener("click", function(){
  if(myArray.length === 5){
    alert("You can only choose 10 numbers")
  }
  else if(myArray.length === 4){
    myArray.push(input.value)
  numbers.innerHTML += input.value
   input.value = "" ;
  }
  else{
  myArray.push(input.value)
  numbers.innerHTML += input.value + ", "
    input.value = "";
  }
})

reverseButton.addEventListener("click", function(){
for(let i = myArray.length - 1; i >=0; i--){
  reversedArray.push(myArray[i]) 
  if(reversedArray.length === 5){
  reversedNumbers.innerHTML += myArray[i]
  }
  else{
    reversedNumbers.innerHTML += myArray[i] + ", "
  }
}

})