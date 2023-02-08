console.log( 'dht.js running' );
console.log( 'press CTRL+C to stop!' );

var sensorLib = require( 'node-dht-sensor');
sensorLib.initialize( 22, 12 );
var interval = setInterval( function () {
  read();
}, 300000 );

function read() {
  var readout = sensorLib.read();
  var temperature = readout.temperature.toFixed(2);
  console.log( 'Temperature: ' + temperature + 'C, ' + 'humidity: ' + readout.humidity.toFixed(2) + '%' );
  if ( 19.0 > temperature ) {
    console.log( "Brrr! it's too cold: turn on the heating!" );
  } else if ( 25 < temperature ) {
    console.log( "Phew! It's getting hot in here. Time to turn off the heating!" );
  } else {
    console.log( "mmmm! It's nice and toastie. Stay as you are!" );
  }
}


process.on( 'SIGINT', function () {
  clearInterval(interval);
  console.log('Bye, bye!');
  process.exit();
});