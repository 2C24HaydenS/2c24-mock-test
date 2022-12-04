let num = 0
input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.AB, function () {
    num = 0
    for (let num = 0; num <= 9; num++) {
        basic.showNumber(num * 2 + 1)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211096")
})
