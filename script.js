let tasks = [
    {
        id: "task-001",
        title: "資料作成",
        deadline: "2026-08-15",
        duration: "30min",
        location: "anywhere",
        completed: false,
        assigned: false,
        scheduledDate: null,
        scheduledStartHour: null,
        createdAt: "2026-08-01T10:00:00",
    }
]

const taskListEl = document.getElementById("task-list");

function renderTasks() {
    taskListEl.innerHTML = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.textContent = task.title;
        taskListEl.appendChild(li);
    });
}

renderTasks();
