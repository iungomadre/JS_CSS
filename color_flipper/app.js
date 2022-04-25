const MAX_HEX_COLOR = 16777215 // #FFFFFF - max 24-bit number

const colors = ['red', 'blue', 'green']
const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const hexStr = getRandomHexColor()
    document.body.style.backgroundColor = hexStr
    color.textContent = hexStr
})

function getRandomHexColor() {
    const randomNumber = Math.floor(Math.random() * MAX_HEX_COLOR)
    const hexStr = randomNumber.toString(16)
    return hexStr
}