//start.js
var spawn = require('child_process').spawn,
    py    = spawn('python', ['compute_input.py']),
    data = [["laptop", 2], ["no person", 3], ["coffee", 4], ["woman", 33], ["chair", 1], ["water", 43], ["time",4]];
    dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log(dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();