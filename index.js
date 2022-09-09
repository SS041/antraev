// Import stylesheets
import './style.css';
// get all data
function todo() {
  fetch('http://localhost:3000/todos')
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      //Here can show all the data
      console.log(data);
    });
}
todo();

//post when click submit
function post() {
  var li = document.createElement('li');
  var element = document.getElementById('form');
  element.addEventListener('click', myFunction);
  var inputValue = document.getElementById('sub').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById('myUL').appendChild(li);
  function myFunction() {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: inputValue,
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  document.getElementById('myInput').value = '';
}
post();
