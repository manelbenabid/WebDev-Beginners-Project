const button = document.getElementById('add-btn');
const input = document.querySelector('[data-input');
const itemList = document.getElementById('item-list');


// Event Listeners
button.addEventListener('click', addTask);
removeElement();

// create the closing button
var myNodelist = document.getElementsByName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);;
}


// click on the remove button to hide the current list item
function removeElement() {
  var remove = document.getElementsByClassName("remove");
  var i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// add a 'checked' symbol when clicking on a list item
itemList.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false)



function addTask() {
  var li = document.createElement('li');
  var inputValue = input.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must add a task!')
  } else {
    itemList.appendChild(li);
  }
  input.value = '';


  var span = document.createElement('span');
  var txt = document.createTextNode("\u00D7");
  span.className = 'remove';
  span.appendChild(txt);
  li.appendChild(span);


  removeElement();
}









