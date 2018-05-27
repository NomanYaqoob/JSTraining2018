var database = firebase.database();

function addTodo() {
  var form = new FormData(document.querySelector('form'));
  var newTodoRef = database.ref('todos').push();
  newTodoRef.set({
    title: form.get('title'),
    description: form.get('description'),
    date: (new Date()).toDateString()
  });
  document.querySelector('form').reset();
  return false;
}
fetchTodos();

function fetchTodos() {
  var table = document.querySelector('tbody');
  var commentsRef = database.ref('todos');
  commentsRef.on('child_added', function (data) {
    console.log(data.val());
    var row = generateRow(data.val(), data.key);
    var tr = document.createElement('tr');
    table.innerHTML += row;
    // addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });
}

function deleteRow(key, row) {
  document.querySelector('tbody').removeChild(row.parentElement.parentElement);
  var ref = database.ref('todos/' + key).set({});
}


function generateRow(data, key) {
  return `<tr>
    <td>${data.title}</td>
    <td>${data.description}</td>
    <td>${data.date}</td>
    <td><button class='btn btn-danger' onclick="deleteRow('${key}',this)"> X</button></td>
  </tr>`
}