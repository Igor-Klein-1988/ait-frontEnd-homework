const task = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskListUl = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

// taskListUl.addEventListener("click", (e) => {
//   console.log(e);
// });

const taskNames = [];
const nameIsExist = (taskName) => {
  return taskNames.find((name) => name === taskName);
};

function addTask() {
  const taskName = task.value.trim();
  if (taskName && !nameIsExist(taskName)) {
    taskNames.push(taskName);
    const li = document.createElement("li");
    li.id = "li-" + taskName;
    li.style.margin = "20px";
    // li.style.justifyContent = "space-between"
    const spanId = `span-${taskName}`;
    const doneButtonId = `done-${taskName}`;
    const deleteButtonId = `delete-${taskName}`;

    li.innerHTML = `
        <div class="d-flex justify-content-between">
            <span id='${spanId}' class="col-5">${taskName}</span>
            <div class="col-3">
                <button id='${doneButtonId}' class="btn btn-success">Done</button>
                <button id='${deleteButtonId}' class="btn btn-danger">Delete</button>
            </div>  
        </div> 
    `;
    taskListUl.appendChild(li);
    const doneTaskButton = document.getElementById(doneButtonId);
    doneTaskButton.addEventListener("click", () => {
      const taskName = document.getElementById(spanId);
      taskName.style.textDecoration = "line-through";
      return null;
    });
    const deleteTaskButton = document.getElementById(deleteButtonId);
    deleteTaskButton.addEventListener("click", () =>
      document.getElementById(li.id).remove()
    );
  }
  task.value = "";
}
