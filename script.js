
const INPUT = document.createElement('textarea')
INPUT.classList.add('input')
document.body.append(INPUT)
// setTimeout(function() {
//     INPUT.focus();
// }, 0);



const KBRD = document.createElement('div')
KBRD.classList.add('keyboard')
document.body.append(KBRD)

for(let i = 0; i < 61; i++){
    const KEY = document.createElement ('div')
    KEY.classList.add('key')
    KBRD.append(KEY)
    KEY.dataset.code = 'Digit1'
}


const KEY = document.querySelector('.key')
KEY.innerText = '1'

INPUT.addEventListener('keydown', (event) => {
        let code = event.code
        if (KEY.dataset.code = `${code}`) {
        KEY.style.backgroundColor = 'red'
        }
    
    // INPUT.value += event.key
    console.log(event.code)
})


KEY.addEventListener('click', (event) => {
    INPUT.value += event.target.innerText
})