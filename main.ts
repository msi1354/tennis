radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(1)
    basic.clearScreen()
})
radio.setGroup(55)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
