// import the onoff library
var onoff = require( 'onoff' );

// let user know how to stop programme
console.log( "running blink.js ... Press CTRL C to stop programme" );

// initialise GPIO pin 4 to be an output pin
var Gpio = onoff.Gpio, 
                    led = new Gpio( 4, 'out' ),
                    interval;

interval = setInterval( function () {
  // synchronously read the value of pin 4 and transform it
 // if 1 change it to 0, if 0 change it to 1
  var value = (led.readSync() + 1 ) % 2;

  // Asynchronously write the new value to pin 4
  led.write( value, function () {
    console.log( "Changed LED state to: " + value );
  });
}, 2000);

// listen to the event triggered by pressing CTRL+C
process.on( 'SIGINT' function() {
  clearInterval( interval);
  led.writeSync(0);
  

  // cleanly close the GPIO pin before exiting
  led.unexport();
  console.log( "Bye-bye" );
  process.exit();
});

