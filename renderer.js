const fs = require('fs');

const ul = document.getElementById('files');
for(const file of fs.readdirSync('./')) {
  const li = document.createElement('li');
  li.innerText = file;
  ul.appendChild(li);
}