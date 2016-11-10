var serial;
var portName = 'dev/cu.usbmodem14121';

var inData;

var ledSlider;

//two var for incoming pot values to move circle
var theX;
var theColor;

function setup() {
	createCanvas(400, 400);
	
// 	ledSlider = createSlider(0,255,0);
// 	ledSlider.position(20,20);
	
	//callbacks
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing
  serial.open(portName); // open a serial port

}

function draw(){
  background('#000');
 
 //console.log(inData);
 
  rect(width/2, height/2, inData, inData);
  
  rect(inData, inData, 30, 30);
  
 rect(width- inData,inData, 30, 30);
  
 rect(inData, height- inData, 30, 30);
  
  rect(width- inData,height- inData, 30, 30);
  
  if(theColor){
    fill(random(0,255), random(0,255), random(0,255));
    // println("potentiometer is turning");
  }
  else{
    fill(255);
    // println("potentiometer is at 0");
  }
 
 //var led = ledSlider.value();
 //console.log(led);
 
 //send LED value to arduino
//serial.write(led);
 
 //noStroke();
// ellipse(theX, theY,30,30);
  
}

function serverConnected() {
   println('connected to server.');
}
 
function portOpen() {
   println('the serial port opened.')
}
 
function serialEvent() {
  //this reads a singlebyte sent from arduino (Serial.write on arduino)
// inData = Number(serial.read()); //reads the pot value  
 
 //read a string from Arduino (Serial.print on arduino side)
 var inString = serial.readStringUntil('\r\n');
 
 //if have a string, then separate it at the commas
 if(inString.length > 0){
  // create an array of values wherever we have a comma
   var sensors = split(inString, ',');
   console.log(sensors);
   
   inData = map(sensors[0], 0, 1023, 0, 255);
   theColor = map(sensors[1], 0, 1023, 0, 255);
 }
}
 
function serialError(err) {
   println('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
   println('The serial port closed.');
}
