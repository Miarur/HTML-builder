const path = require('path'); 
const fs = require('fs'); 
const { stdin, stdout, exit } = process; 

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

fs.writeFile (
  path.join(__dirname, 'text01.txt'), '', err => {
    if(err) throw err;
    console.log(' ======= file has been created ======= \n');
    stdout.write(' -------- WRITE SOMETHING, PLEASE ---------- \n');
  }
);

rl.on('line', (input) => {
  if(input === 'exit') {
    process.exit('  -------- "Good luck, buddy!" ------- \n ====== Program has been closed ====== \n');
  }
  fs.appendFile(
    path.join(__dirname, 'text01.txt'),
    `${input +  '\n'}`,
    err => {
        if (err) throw err;
    }
  );
})

process.on('exit', () => stdout.write('  -------- "Good luck, buddy!" ------- \n ====== Program has been closed ====== \n'));




