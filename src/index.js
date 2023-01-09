document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo(e.target.new_task_description.value);
    form.reset();
  });
 
  const taskList = document.getElementById("tasks");
});

function createToDo(todo) {
  let li = document.createElement("li");
  let pList = document.createElement("p");

  let removeBtn = document.createElement("button");
  removeBtn.textContent = " X";
  removeBtn.addEventListener("click", handleDelete);
  

  let prioritySelection= document.createElement("select");
  let highPriority = document.createElement("option");
  let mediumPriority = document.createElement("option");
  let lowPriority = document.createElement("option");

  // select priority color
  prioritySelection.addEventListener("change", (e) => {
    // console.log(e.target.options[selectPriority.selectedIndex].value);

    if (e.target.options[prioritySelection.selectedIndex].value === "High")
     {li.style.color = "red"; } 

     else if (e.target.options[prioritySelection.selectedIndex].value === "Medium") 
      {li.style.color = "#eed202"; } 
    
    else {  li.style.color = "lightgreen"; }
  });


  highPriority.textContent = "High";
  mediumPriority.textContent = "Medium";
  lowPriority.textContent = "Low";
  prioritySelection.add(highPriority);
   prioritySelection.add(mediumPriority);
   prioritySelection.add(lowPriority);

  pList.textContent = todo;
  li.appendChild(pList);
  li.appendChild(removeBtn);
  li.appendChild(prioritySelection);
  // li.appendChild(editBtn);
  document.getElementById("tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}


