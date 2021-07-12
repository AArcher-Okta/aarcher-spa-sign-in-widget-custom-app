function living() {
  const button = document.getElementsByClassName('btn-choice-yes');
  const face = document.getElementsByClassName('mood-icon-button6');
  document.getElementById('tracker-43-input').value = Math.floor((Math.randon() * 10) + 1);
  document.getElementById('sleepHours').value = Math.floor((Math.randon() * 1) + 8);
  document.getElementById('numberOfSteps').value = Math.floor((Math.randon() * 10000) + 5000);
  document.getElementById('heathlyhabits-weightinput').value = Math.floor((Math.randon() * 3-1) + 180);
  const tracker = document.getElementsByClassName('btn-tracker');

  for (let i = 0; i < button.length; i++) {
    buton[i].click();
  }
  for (let y = 0; y < face.length; y++) {
    buton[y].click();
  }
  for (let j = 0; j < button.length; j++) {
    buton[j].click();
  }
}

living ();

// loop through and append child for document

let i = 0; while (i < 200) {
  let el = document.createElement('li');
  el.innerText = 'This is my list item number ' + i;
  document.body.appendChild(el);
  i++;
}

// Loo[ using document fragment

let el;
let i = 0;
let fragment = document.createDocumentFragment();

while (i < 200) {
  el = document.createElement('li');
  el.innerText = 'This is my list item nubmer ' + i;
  fragment.appendChild(el);
  i++;
}

document.body.appendChild(fragment);


// batch date updater

function batchDate() {
  const date = document.getElementsByClassName('dateInput');
  for (let i = 0; i < date.length; i++) {
    date[i].innerHTML = "10/10/2019"
  }
}

batchDate();