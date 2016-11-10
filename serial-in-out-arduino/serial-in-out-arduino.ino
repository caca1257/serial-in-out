void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); //initialize

}

void loop() {
  // put your main code here, to run repeatedly:

  //read serial data coming in from p5
  //if data is avaible in serial port, then read it
//  if(Serial.available() > 0){
//    //p5 will be sending some value between 0 and 255
//    int inByte = Serial.read(); 
//    //use value we recieve to light the LED
//    analogWrite(5, inByte);
    
   
  //}
  //send pot value to p5
  //int sensor = analogRead(A0);
  //use serial.write to send RAW BINARY
  //Serial.write(sensor/4); //send value in a single byte
  //delay(10); //delay to limit amt of content in serial port

  //send multiple values to p5 in as ASCII string
  int sensor1 = analogRead(A0);
  Serial.print(sensor1);
  Serial.print(',');
  int sensor2 = analogRead(A1);
  Serial.println(sensor2);
}
