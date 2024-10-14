"use strict"
let todoList = []; 
let initList = function() {
  let savedList = window.localStorage.getItem("todos");
    if (savedList != null)
        todoList = JSON.parse(savedList);
    else

  todoList.push(
  {
      title: "Learn JS",
      description: "Create a demo application for my TODO's",
      place: "445",
      category: '',
      dueDate: new Date(2024,10,16)
  },
  {
      title: "Lecture test",
      description: "Quick test from the first three lectures",
      place: "F6",
      category: '',
      dueDate: new Date(2024,10,17)
  }
  
  );
}

initList();

let updateTodoList = function() {
  let todoListDiv =
  document.getElementById("todoListView");

  while (todoListDiv.firstChild) {
      todoListDiv.removeChild(todoListDiv.firstChild);
  }

  let filterInput = document.getElementById("inputSearch");   
  for (let todo in todoList) {
    if (
      (filterInput.value == "") ||
      (todoList[todo].title.includes(filterInput.value)) ||
      (todoList[todo].description.includes(filterInput.value))
    ) {
      let newElement = document.createElement("p");
      let newContent = document.createTextNode(todoList[todo].title + " " +
                                               todoList[todo].description);
      newElement.appendChild(newContent);
      todoListDiv.appendChild(newElement);
      let newDeleteButton = document.createElement("input");
      newDeleteButton.type = "button";
      newDeleteButton.value = "x";
      newDeleteButton.addEventListener("click",
          function() {
              deleteTodo(todo);
          });
      newElement.appendChild(newDeleteButton);
    }
  }
}

setInterval(updateTodoList, 1000);

let deleteTodo = function(index) {
  todoList.splice(index,1);
}

let addTodo = function() {

    let inputTitle = document.getElementById("inputTitle");
    let inputDescription = document.getElementById("inputDescription");
    let inputPlace = document.getElementById("inputPlace");
    let inputDate = document.getElementById("inputDate");

    let newTitle = inputTitle.value;
    let newDescription = inputDescription.value;
    let newPlace = inputPlace.value;
    let newDate = new Date(inputDate.value);

    let newTodo = {
        title: newTitle,
        description: newDescription,
        place: newPlace,
        category: '',
        dueDate: newDate
    };

    todoList.push(newTodo);
    window.localStorage.setItem("todos", JSON.stringify(todoList));
}