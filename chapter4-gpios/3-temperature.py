
from gpiozero import time
from w1thermsensor import W1ThermSensor, Unit
sensor = W1ThermSensor()

while True:
 temp_C = sensor.get_temperature(Unit.DEGREES_C)
 temp_F = sensor.get_temperature(Unit.DEGREES_F)

print(temp_C, " Celsius")
print(temp_F, " Fahrenheit")

time.sleep(2)