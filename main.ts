let きょり = 0
pins.digitalWritePin(DigitalPin.P2, 0)
pins.servoWritePin(AnalogPin.P0, 180)
basic.pause(100)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    きょり = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
    serial.writeNumber(きょり)
    serial.writeLine("")
    if (きょり < 15) {
        pins.servoWritePin(AnalogPin.P0, 90)
        soundExpression.happy.play()
    } else {
        pins.servoWritePin(AnalogPin.P0, 180)
    }
    basic.pause(500)
})
