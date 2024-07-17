// Functions

function updateKeyInfo(e) {
  const insert = document.querySelector('#insert');

  console.log(insert);
  while (insert.firstChild) {
    insert.firstChild.remove();
  }

  key = document.createElement('div');
  key.className = 'key';
  key.appendChild(document.createTextNode(`${e.key}`));
  keySmall = document.createElement('small');
  keySmall.appendChild(document.createTextNode('e.key'));
  key.appendChild(keySmall);
  insert.appendChild(key);

  keyCode = document.createElement('div');
  keyCode.className = 'key';
  keyCode.appendChild(document.createTextNode(`${e.keyCode}`));
  keyCodeSmall = document.createElement('small');
  keyCodeSmall.appendChild(document.createTextNode('e.keyCode'));
  keyCode.appendChild(keyCodeSmall);
  insert.appendChild(keyCode);

  code = document.createElement('div');
  code.className = 'key';
  code.appendChild(document.createTextNode(`${e.code}`));
  codeSmall = document.createElement('small');
  codeSmall.appendChild(document.createTextNode('e.code'));
  code.appendChild(codeSmall);
  insert.appendChild(code);
}

// Event listner
document.body.addEventListener('keypress', updateKeyInfo);
