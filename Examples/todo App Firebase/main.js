var _db = firebase.database();
fetchTodos();
function addTodo() {
  var form = document.querySelector('form');
  var formData = new FormData(form);
  var newTodoRef = _db.ref('todos').push();
  var newTodo = {
    title: formData.get('title'),
    description: formData.get('description'),
    timestamp: (new Date()).getTime(),
    checked: false
  };
  newTodoRef.set(newTodo);
  form.reset();
  return false;
}



function fetchTodos() {
  var table = document.querySelector('tbody');
  var todosRef = _db.ref('todos');
  todosRef.on('child_added', (data) => {
    console.log(data.val(), data.key);
    var row = generateRow(data.val(), data.key);
    table.innerHTML += row;
  });
}

function generateRow(data, key) {
  return `<tr>
    <td>${data.title}</td>
    <td>${data.description}</td>
    <td>${(new Date(data.timestamp)).toLocaleDateString()}</td>
    <td>${data.checked ? 'Done' : 'Pending'}</td>
    <td><button class='btn btn-danger' onclick="deleteRow('${key}',this)"> X</button></td>
  </tr>`
}

function deleteRow(key, row) {
  document.querySelector('tbody').removeChild(row.parentElement.parentElement);
  var ref = _db.ref('todos/' + key).set({});
}