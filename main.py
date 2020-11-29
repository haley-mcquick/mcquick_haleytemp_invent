light.set_brightness(20)
tempF = input.temperature(TemperatureUnit.FAHRENHEIT)
print ("Temperature:" + tempF + "F")

if tempF >= 38 and  tempF <= 40:
    light.set_all(color.rgb(0,255,0))
elif tempF < 38:
    light.set_all(color.rgb(0, 0, 255))
else:
    light.set_all(color.rgb(255,0,0))
    