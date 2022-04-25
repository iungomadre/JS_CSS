const reset = document.querySelector('.reset')
const inc = document.querySelector('.inc')
const dec = document.querySelector('.dec')
const counter = document.querySelector('.counter')

reset.addEventListener('click', () => {
    updateCounter(counter, () => {
        return 0
    })
})

inc.addEventListener('click', () => {
    updateCounter(counter, (oldVal) => {
        return oldVal + 1
    })
})

dec.addEventListener('click', () => {
    updateCounter(counter, (oldVal) => {
        return oldVal - 1
    })
})

function updateCounter(counter, calcNewValue) {
    counter.textContent = calcNewValue(parseInt(counter.textContent))
    updateColor(counter)
}

function updateColor(counter) {
    const counterValue = parseInt(counter.textContent)
    if (counterValue < 0) {
        counter.style.color = 'red'
    }
    if (counterValue > 0) {
        counter.style.color = 'green'
    }
    if (counterValue == 0) {
        counter.style.color = 'black'
    }
}