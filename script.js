// Functions

function updateKeyInfo(e) {
  const insert = document.querySelector('#insert');

  while (insert.firstChild) {
    insert.firstChild.remove();
  }

  insert.appendChild(makeDivElement('key', e.key));
  insert.appendChild(makeDivElement('keyCode', e.keyCode));
  insert.appendChild(makeDivElement('code', e.code));
}

function makeDivElement(name, val) {
  div = document.createElement('div');
  div.className = 'key';
  div.appendChild(document.createTextNode(val));
  div.appendChild(makeSmallElement(`e.${name}`));
  return div;
}

function makeSmallElement(name) {
  small = document.createElement('small');
  small.appendChild(document.createTextNode(name));
  return small;
}

// Event listner
addEventListener('keypress', updateKeyInfo);
