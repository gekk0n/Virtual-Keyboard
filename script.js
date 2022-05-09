import { createHeader } from './layout.js';
import { enKeyCode, enKey } from './keynames.js';

createHeader();

const INPUT = document.createElement('textarea');
INPUT.classList.add('input');
document.body.append(INPUT);
INPUT.addEventListener('keydown', (event) => event.preventDefault());

const KBRD = document.createElement('div');
KBRD.classList.add('keyboard');
document.body.append(KBRD);

function createKeys() {
  for (let i = 0; i < enKeyCode.length; i += 1) {
    const KEY = document.createElement('div');
    KEY.classList.add('key');
    KEY.classList.add(`${enKeyCode[i]}`);
    KBRD.append(KEY);
    KEY.dataset.code = `${enKeyCode[i]}`;
  }
}
createKeys();

const KEYS = document.querySelectorAll('.key');

let lang = ('en');
function changeLang(language) {
  KEYS.forEach((el, i) => {
    const key = el;
    key.textContent = enKey[i][language];
  });
}
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' && event.ctrlKey) {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    // lang === 'en' ? lang = 'ru' : lang = 'en';
    changeLang(lang);
  }
});
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const localLang = localStorage.getItem('lang');
    changeLang(localLang);
  }
}
window.addEventListener('load', getLocalStorage);

changeLang(lang);

const SERVICE_KEYS = document.querySelectorAll('.Backspace, .Tab, .CapsLock, .Enter, .ShiftLeft, .ShiftRight, .ShiftRight, .ControlLeft, .MetaLeft, .AltLeft, .AltRight, .MetaRight, .ControlRight');
const LETTER_KEYS = document.querySelectorAll('.KeyQ, .KeyW, .KeyE, .KeyR, .KeyT, .KeyY, .KeyU, .KeyI, .KeyO, .KeyP, .BracketLeft, .BracketRight, .KeyA, .KeyS, .KeyD, .KeyF, .KeyG, .KeyH, .KeyJ, .KeyK, .KeyL, .Semicolon, .Quote, .KeyZ, .KeyX, .KeyC, .KeyV, .KeyB, .KeyN, .KeyM, .Comma, .Period, .Slash');

const serviceCodes = [];
for (let i = 0; i < SERVICE_KEYS.length; i += 1) {
  serviceCodes.push(SERVICE_KEYS[i].dataset.code);
}
function keyInput(event) {
  if (event.code !== serviceCodes.find((el) => el === event.code)) {
    INPUT.value += event.key;
  }
}
function clickInput(event) {
  if (event.target.dataset.code !== serviceCodes.find((el) => el === event.target.dataset.code)) {
    INPUT.value += event.target.innerText;
  }
}

document.addEventListener('keydown', keyInput);
document.addEventListener('keydown', (event) => {
  document.querySelector(`[data-code = '${event.code}']`).classList.add('pressed');
});
document.addEventListener('keyup', (event) => {
  document.querySelector(`[data-code = '${event.code}']`).classList.remove('pressed');
});

KEYS.forEach((el) => el.addEventListener('click', clickInput));

function toUpper(el) {
  el.textContent = el.textContent.toUpperCase();
}
function toLower(el) {
  el.textContent = el.textContent.toLowerCase();
}

const SHIFT_KEY = document.querySelectorAll('.ShiftLeft, .ShiftRight');
SHIFT_KEY.forEach((shiftKey) => shiftKey.addEventListener('mousedown', () => {
  LETTER_KEYS.forEach(toUpper);
}));
SHIFT_KEY.forEach((shiftKey) => shiftKey.addEventListener('mouseup', () => {
  LETTER_KEYS.forEach(toLower);
}));
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    LETTER_KEYS.forEach(toUpper);
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    LETTER_KEYS.forEach(toLower);
  }
});

const CAPS_KEY = document.querySelector('.CapsLock');
let capsLock = 'off';
function switchRegister(keys) {
  if (capsLock === 'off') {
    keys.forEach(toUpper);
    capsLock = 'on';
    CAPS_KEY.classList.add('pressed');
  } else {
    keys.forEach(toLower);
    capsLock = 'off';
    CAPS_KEY.classList.remove('pressed');
  }
}
document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    switchRegister(LETTER_KEYS);
  }
});
CAPS_KEY.addEventListener('click', () => {
  switchRegister(LETTER_KEYS);
});

const BACKSPACE_KEY = document.querySelector('.Backspace');
BACKSPACE_KEY.addEventListener('mousedown', () => {
  INPUT.value = INPUT.value.slice(0, -1);
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'Backspace') {
    INPUT.value = INPUT.value.slice(0, -1);
  }
});

const TAB_KEY = document.querySelector('.Tab');
TAB_KEY.addEventListener('click', () => {
  INPUT.value += '    ';
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    INPUT.value += '    ';
  }
});
