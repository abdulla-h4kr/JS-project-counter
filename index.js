let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")
let countEl = document.getElementById("count-el")
let count = 0
let sum = 0

function increment() {
    count += 1
    sum += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
    sumEl.textContent = "Total: " + sum
}

