// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo'); 


// event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

// functions

function addTodo(event){

    // Prevent form from submitting 

    event.preventDefault();

    // Todo div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');


    
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // check trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);  

    // clear todo input value

    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;
    // DELETE Todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement ;
        
        // animation
        todo.classList.add("fall");
        todo.addEventListener('transitioned', function(){  
        });
        todo.remove();
    }

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    // console.log(todos);
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "All":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }   
                else{
                    todo.style.display = "none";
                } 
                break;
        }
    });
    
}

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function (todo) { 
//         const mStyle = todo.style;  
//         if(mStyle != undefined && mStyle != null){
//             switch (e.target.value) {
//                 case "all":
//                     mStyle.display = "flex";
//                     break;
//                 case "completed":
//                     if (todo.classList.contains('completed')) {
//                         mStyle.display = 'flex';
//                     } else {
//                         mStyle.display = "none";
//                     }
//                     break;
//                 case "uncompleted":
//                     if (todo.classList.contains('completed')){
//                         mStyle.display = 'none';
//                     }
//                     else{
//                         mStyle.display = "flex";
//                     }
//                     break;
//             }
//         }
//     })
// }



