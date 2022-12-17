#include <Servo.h>

Servo servo;
int servoPorta = 7;
int ldrE = A1;
int ldrD = A2;

void setup()
{
  servo.attach(servoPorta);
  Serial.begin(9600);
}

void loop()
{
  int printLdrE = analogRead(ldrE);
  int printLdrD = analogRead(ldrD);
  
  Serial.println(printLdrE);
  /*if(printLdrE > 500 && printLdrD < 300) {
    servo.write(45);
  	delay(500);
    
  } else if(printLdrD > 500 && printLdrE < 300) {
    servo.write(135);
  	delay(500);
    
  } else {
    servo.write(90);
  	delay(500);
    
  }*/
}