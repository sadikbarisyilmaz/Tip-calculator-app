const custom = document.querySelector("#custom")
const resetBtn = document.querySelector("#reset")
const billInput = document.querySelector("#bill")
const personInput = document.querySelector("#person")
let tipPersonDOM = document.querySelector("#tipPerson")
let tipTotalDOM = document.querySelector("#tipTotal")
const buttonsDom = document.querySelector("#buttons")
const peopleHeader = document.querySelector("#peopleHeader")

let warning = document.querySelector("#warning")

let bill = 0
let person = 1
let percentage = 0
let tipTotal = (percentage / 100 * bill)
let tipPerson = (tipTotal / person)

tipPersonDOM.innerHTML = `$${tipPerson}.00`
tipTotalDOM.innerHTML = `$${tipTotal}.00`


buttonsDom.addEventListener("click", percButtons)

function percButtons(e) {
  console.log(e.target.value)
  if (e.target.value !== undefined) {
    percentage = e.target.value
  } else { }
}

custom.addEventListener("input", percInput)

function percInput(e) {
  console.log(e.target.value)
  percentage = e.target.value
}


billInput.addEventListener("input", billInputFunc)

function billInputFunc(e) {
  console.log(e.target.value)
  bill = e.target.value
}

personInput.addEventListener("input", personInputFunc)

function personInputFunc(e) {
  if (e.target.value == 0) {
    personInput.value = ""
    warning.innerHTML = "Can't be zero"
    personInput.setAttribute("class", "very-light-green w-full p-2 text-end outline-red-700")

  } else {
    console.log(e.target.value)
    person = e.target.value
    warning.innerHTML = ""
    personInput.setAttribute("class", "very-light-green w-full p-2 text-end outline-inherit")
  }

}

window.addEventListener("input", tipFunc)
window.addEventListener("click", tipFunc)


function tipFunc() {
  tipTotal = ((percentage / 100) * bill)
  tipPerson = (tipTotal / person)

  tipPersonDOM.innerHTML = `$${Number.parseFloat(tipPerson).toFixed(2)}`
  tipTotalDOM.innerHTML = `$${Number.parseFloat(tipTotal).toFixed(2)}`



}

resetBtn.addEventListener("click", resetFunc)
function resetFunc() {
  bill = 0
  person = 1
  percentage = 0
  billInput.value = ""
  personInput.value = ""
  custom.value = ""
  tipPerson = 0
  tipTotal = 0
 tipPersonDOM.innerHTML = `$${Number.parseFloat(tipPerson).toFixed(2)}`
  tipTotalDOM.innerHTML = `$${Number.parseFloat(tipTotal).toFixed(2)}`

}
