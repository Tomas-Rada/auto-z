let heslo: string = "njimok@<"



radio.setGroup(234)
radio.setFrequencyBand(54)

let u = 2
let uP = 0
let x: number = 0
let y: number = 0
let parts: string[] = []
let koloP: number = 0
let koloL: number = 0
let k: boolean = true

radio.onReceivedValue(function (name: string, value: number) {

    if (name == heslo && k) {
        u = value
        k = false

    }
})




radio.onReceivedString(function (text: string) {
    uP = radio.receivedPacket(RadioPacketProperty.SerialNumber)

    if (u === uP) {
        console.log(text)
        parts = text.split(",")
        y = parseInt(parts[0]);
        x = parseInt(parts[1]);
        koloL = (y * 127 - x * 125) * -1
        koloP = y * 127 + x * 127
        PCAmotor.MotorRun(PCAmotor.Motors.M4, koloP)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, koloL)

    }
})
