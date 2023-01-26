// this programme requires onoff 
// install it by cd'ing to the right directory and running: npm install onoff --save

console.log( "pir programme running. To stop press CTRL C.  searching for the presence of someone/something! ...");

// use onoff to intialise pin 17  in input mode
// both - means we want to handle both rising and falling interrupt edges
var Gpio = require( 'onoff' ).Gpio,
    	      sensor = new Gpio( 17, 'in', 'both' );

// set the sensor to watch for changes on pin 17
// if a change is detected, the anonymous callback function will be called with the new value
sensor.watch( function( err, value ) {
    if( err ) {
       exit( err );  
    } else {
     var d = new Date().toISOString().slice(0, 19).replace('T', ' ');
      console.log( value ? d + "there is some-one there!" : d + "clear!" );
   }
});

function exit( err ) {

   // check for an error
   if( err ){
      // if there is an error, report it
      console.log( 'An error occurred: ' + err );
   }

   // exit cleanly
   sensor.unexport();
   console.log( 'Bye-bye!' );
   process.exit();
   
}

// if CTRL C is pressed, stop the programme
process.on( 'SIGINT', exit ); 