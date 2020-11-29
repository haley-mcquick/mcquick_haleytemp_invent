light.setBrightness(20)
let tempF = input.temperature(TemperatureUnit.Fahrenheit)
console.log("Temperature:" + tempF + "F")
if (tempF >= 38 && tempF <= 40) {
    light.setAll(color.rgb(0, 255, 0))
} else if (tempF < 38) {
    light.setAll(color.rgb(0, 0, 255))
} else {
    light.setAll(color.rgb(255, 0, 0))
}

