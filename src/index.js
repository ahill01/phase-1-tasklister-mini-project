document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('loaded');

//add listener event, call function 
  const submitBtn = document.querySelector("#new-task-description").nextElementSibling;
  const formElem = document.querySelector("form"); 
  formElem.addEventListener("submit",submitMe);

  function submitMe(e) {
    //prevent default
    e.preventDefault();

    //grab new To Do
    const newToDo = e.target.querySelector("#new-task-description").value;
    console.log(newToDo);

    //addToDo to list
    addToDo(newToDo);
    //
    console.log("I've been submitted"); 
  }

 function addToDo(newTask) {
   // add DOM element
   const newListItem = document.createElement('li');
   const priorityBtn = document.createElement("button");
 //style pieces
 priorityBtn.style.backgroundColor = "#e7e7e7"; 
 priorityBtn.style.borderRadius = "15px";
 priorityBtn.priority = "medium";
 priorityBtn.style.padding = "10px";
 priorityBtn.style.float = "right";
 priorityBtn.textContent = priorityBtn.priority;
 

  newListItem.textContent = newTask; 
  //select 'list' element
  const listElem = document.querySelector("#tasks");
   //append DOM element
   listElem.appendChild(newListItem);
   newListItem.appendChild(priorityBtn);
  

 }

//delete task
function done(task){
  //select task
const doneTask = document.querySelector()
  //remove

}
//priority task


//additional input

//edit

//free choice

});


