const { date } = require('./commands/index.js');
const commands = require('./commands/index.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  
  var [cmd, ...args] = data.toString().trim().split(" ");
 
  function write(data) {
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  }

  if(commands.hasOwnProperty(cmd)) {
    commands[cmd](args, write)
  } else {
    write("Command not found")
  }

});

