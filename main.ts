input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    myVariable = randint(0, 1)
    if (myVariable == 0) {
        basic.showString("Truth")
    } else if (myVariable == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    arrow = randint(0, 4)
    if (arrow == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (arrow == 3) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
})
let arrow = 0
let myVariable = 0
basic.showString("T or D??")
basic.showString("Push A")
basic.forever(function () {
	
})
