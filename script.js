import {createHeader} from './layout.js'
import {enKeyCode, enKey} from './keynames.js'
createHeader()
let SERVICE_KEYS = document.querySelectorAll('.Backspace, .Tab, .CapsLock, .Enter, .ShiftLeft, .ShiftRight, .ShiftRight, .ControlLeft, .MetaLeft, .AltLeft, .AltRight, .MetaRight, .ControlRight') 

const INPUT = document.createElement('textarea')
INPUT.classList.add('input')
document.body.append(INPUT)
INPUT.addEventListener('keydown', event => event.preventDefault())

const KBRD = document.createElement('div')
KBRD.classList.add('keyboard')
document.body.append(KBRD)


for(let i = 0; i < enKeyCode.length; i++){
    const KEY = document.createElement ('div')
    KEY.classList.add('key')
    KEY.classList.add(`${enKeyCode[i]}`)
    KBRD.append(KEY)
    KEY.dataset.code = `${enKeyCode[i]}`
    KEY.innerText = `${enKey[i]}`
}
const KEYS = document.querySelectorAll('.key')




document.addEventListener('keydown', keyInput )
SERVICE_KEYS.forEach((el) => el.removeEventListener('keydown', keyInput))
document.addEventListener('keydown', (event) => {
    document.querySelector(`[data-code = '${event.code}']`).classList.add('pressed')
})
document.addEventListener('keyup', (event) => {
    document.querySelector(`[data-code = '${event.code}']`).classList.remove('pressed')
})

KEYS.forEach( el => el.addEventListener('click', clickInput))


const WIN = document.querySelectorAll('.MetaLeft, .MetaRight')
WIN.forEach(el => el.innerText = 'Win')
const SPACE = document.querySelector('.Space')
SPACE.innerText = ''
const CTRL = document.querySelectorAll('.ControlLeft, .ControlRight')
CTRL.forEach(el => el.innerText = 'Ctrl')



SERVICE_KEYS = document.querySelectorAll('.Backspace, .Tab, .CapsLock, .Enter, .ShiftLeft, .ShiftRight, .ShiftRight, .ControlLeft, .MetaLeft, .AltLeft, .AltRight, .MetaRight, .ControlRight') 
let serviceCodes = []
for (let i = 0; i < SERVICE_KEYS.length; i++){
    serviceCodes.push(SERVICE_KEYS[i].dataset.code);
}

function keyInput (event) {
    if (event.code !== serviceCodes.find(el => el === event.code))
    INPUT.value += event.key
}
function clickInput (event) {
    if (event.target.dataset.code !== serviceCodes.find(el => el === event.target.dataset.code))
    INPUT.value += event.target.innerText
}