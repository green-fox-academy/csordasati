'use strict';

var url = "http://localhost:3000/todos";
var addItemAndListButton = document.querySelector('.addItemAndlistButton');
var deleteButton = document.querySelector('.delete')
var input = document.querySelector('.textarea');
var deleteInput = document.querySelector('.deleteInput');
var todoContainer = document.querySelector('.todo-container');

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var hour = dateObj.getUTCHours();
var min = dateObj.getUTCMinutes();


var currentDate = '(' + year + '. '+ month + '. ' + day + '.' + ')';

addItemAndListButton.addEventListener('click', function() {
  addItem();
})

deleteButton.addEventListener('click', function() {
  deleteItem();
})



var newTodo;

var addItem = function () {
  var textInput = input.value;
  newTodo = JSON.stringify({text: textInput});
  todoContainer.innerHTML = '';
  createRequest('POST', url, newTodo, createTodoCallback);
}

var deleteItem = function () {
  var numberInput = deleteInput.value;
  var delUrl = url + '/' + numberInput;
  todoContainer.innerHTML = '';
  createRequest('DELETE', delUrl, null, null);
  refresh();
}

var todoCallback = function (response) {
  var todoItems = JSON.parse(response);
  todoItems.forEach(function (todoItem) {
    var newTodoItem = document.createElement('p');
    var todoItemId = document.createElement('p');
    
    var todoItemsContainer = document.createElement('div');
    todoItemsContainer.className = 'todo-item';
    todoItemsContainer.style.boxShadow =  '-1px 0px 50px 0px rgba(0,0,0,0.75)';
    todoItemsContainer.style.position = 'relative';
    todoItemsContainer.style.left = '100%';
    todoItemsContainer.style.marginTop = '20px';
    todoItemsContainer.style.marginBottom = '20px';
    todoItemsContainer.style.backgroundColor = '#B6B6B6';


    todoItemsContainer.style.marginLeft = 'auto';
    

    todoContainer.appendChild(todoItemsContainer);
    
    var createCheckbox = document.createElement('input');
    createCheckbox.type = 'checkbox';
    newTodoItem.innerText = currentDate + '    ' + todoItem.id + '.      ' + todoItem.text;
    
    todoItemsContainer.appendChild(newTodoItem);
    todoItemsContainer.appendChild(createCheckbox);
  });
}

var refresh = function () {
  createRequest('GET', url, {}, todoCallback);
}

var createTodoCallback = function (response) {
  refresh();
}

//createRequest('POST', url, newTodo, createTodoCallback);

refresh();