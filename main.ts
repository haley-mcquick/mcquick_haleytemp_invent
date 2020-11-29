light.setBrightness(20)
let tempF = input.temperature(TemperatureUnit.Fahrenheit)
console.log("Temperature:" + tempF + "F")
//  if tempF >= 38 and  tempF <= 40:
//      light.set_all(color.rgb(0,255,0))
//  elif tempF < 38:
//      light.set_all(color.rgb(0, 0, 255))
//  else:
//      light.set_all(color.rgb(255,0,0))
if (tempF > 37 && tempF < 41) {
    light.setAll(color.rgb(255, 255, 0))
    console.log("Temperature:" + tempF + "F")
} else if (tempF < 38) {
    light.setAll(color.rgb(0, 255, 255))
    console.log("Temperature:" + tempF + "F")
} else {
    light.setAll(color.rgb(255, 0, 255))
    console.log("Temperature:" + tempF + "F")
}

