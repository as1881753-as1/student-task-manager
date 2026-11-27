
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskError = document.getElementById("task-error");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        taskError.textContent = "Please enter a task before submitting.";
        taskInput.focus();
        return;
    }

    taskError.textContent = "";

    const listItem = document.createElement("li");
    const taskName = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskName.textContent = taskText;

    completeButton.textContent = "Complete";
    completeButton.setAttribute("aria-pressed", "false");

    function toggleCompletion() {
        const completed = taskName.classList.toggle("completed");

        completeButton.textContent = completed ? "Undo" : "Complete";
        completeButton.setAttribute("aria-pressed", String(completed));
    }

    completeButton.addEventListener("click", toggleCompletion);

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(taskName);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = "";
    taskInput.focus();
});
