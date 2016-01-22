'use strict';

function createRequest(method, url, data, callback) {
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(data);
  request.onreadystatechange = function() {
    console.log(callback);
    console.log('allapot: ', request.readyState);
    if (request.readyState === 4) {
        var res = JSON.parse(request.response);
        console.log(res);
        callback(res);
    }
  }
}






var url = "http://localhost:3000/todos";

var addItemButton = document.querySelector('.add_new_todo');
var newTaskText = document.querySelector('.new_task');

var vmi = document.querySelector('.result');

var tasksContainer = document.querySelector('.tasks');

tasksContainer.addEventListener('click', function (event) {
  if (event.target.className === 'delete') {

  }
});


addItemButton.addEventListener('click', function() {
  addItem();
});




var addItem = function(data) {
  var todo = newTaskText.value;
  if(todo !== '') {
    console.log(todo);
      todo = JSON.stringify({text: todo});
      createRequest('POST', url, todo, function(data){
        createTaskStyle(data);
      });
    }
}

var getAllTasks = function() {
  createRequest('GET', url, {}, createTasksStyle);
}

var getOneTask = function() {

}


var createTaskStyle = function(data) {
  var completedTasks = document.querySelector('.completed_tasks_list');
  var incompletedTasks = document.querySelector('.incompleted_tasks_list');
  if(data.status === 'new') {
    var todoItem = template(data.status, data.text, data.todo_id);
    incompletedTasks.appendChild(todoItem);
  } else {
    var todoItem = template(data.status, data.text, data.todo_id);
    completedTasks.appendChild(todoItem);
  }
}


var createTasksStyle = function(data) {
  var completedTasks = document.querySelector('.completed_tasks_list');
  var incompletedTasks = document.querySelector('.incompleted_tasks_list');
  //console.log(data);
 
  data.forEach(function(task) {
    if (task.status === 'new') {
      var todoItem = template(task.status, task.text, task.todo_id);
      incompletedTasks.appendChild(todoItem);  
    } else if (task.status === 'completed') {
      var todoItem = template(task.status, task.text, task.todo_id);
      completedTasks.appendChild(todoItem);
    }
  });

}

var template = function (status, text, id) {

    var taskHolder = document.createElement('div');
    taskHolder.className = 'taskHolder';
    var buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttonHolder';
    var checkBox = document.createElement('input');
    checkBox.className = 'check_box';
    var label = document.createElement('label');
    var editButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    checkBox.type = 'checkbox';
    editButton.innerText = 'Edit';
    editButton.className = 'edit';
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);
    
    taskHolder.appendChild(checkBox);
    taskHolder.appendChild(label);
    taskHolder.appendChild(buttonDiv);


    taskHolder.setAttribute('id', id);

    label.innerText = text;
    checkBox.checked = status;

    return taskHolder;
  }

getAllTasks();
