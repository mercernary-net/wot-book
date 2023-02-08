console.log( 'dht.js running' );
console.log( 'press CTRL+C to stop!' );

var sensorLib = require( 'node-dht-sensor');
sensorLib.initialize( 22, 12 );
var interval = setInterval( function () {
  read();
}, 60000 );

function read() {
  var readout = sensorLib.read();
  var d = new Date().toISOString().slice(0, 19).replace('T', ' ');
  var sensorId          = readout.id;
  
  var temperature = readout.temperature.toFixed(2);
  var min = 19.0;
  var max = 24.0;
  console.log( d + 'console: ' + sensorId + ' reports Temperature: ' + temperature + 'C, ' + ', and humidity: ' + readout.humidity.toFixed(2) + '%' );
  if ( min > temperature ) {
    console.log( "Brrr! it's too cold: turn on the heating!" );
  } else if ( max < temperature ) {
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