let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let savedCount = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += savedCount
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)

    count = 0
    countEl.textContent = count


}


