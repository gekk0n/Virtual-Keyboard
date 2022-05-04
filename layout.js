export function createHeader() {
    const BODY = document.body
    const HEADER = document.createElement('header')
    BODY.prepend(HEADER)

    const TITLE = document.createElement('h1')
    TITLE.innerText = `Task "Virtual Keyboard"`
    HEADER.append(TITLE)

    const P1 = document.createElement('p')
    P1.innerText = `Клавиатура для ОС Windows`
    HEADER.append(P1)

    const P2 = document.createElement('p')
    P2.innerText = `Для переключения языка: Left Shift + Ctrl`
    HEADER.append(P2)
}
