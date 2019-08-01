const fs = require('fs');

const ul = document.getElementById('files');
for(const file of fs.readdirSync('./')) {
  const li = document.createElement('li');
  li.innerText = file;
  ul.appendChild(li);
}

const SerialPort = require('serialport')
const port = new SerialPort('COM4', {
  baudRate: 9600
})

port.write('<a1>')
port.write(Buffer.from('<a1>'))