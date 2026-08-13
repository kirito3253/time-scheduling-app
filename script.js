// タスクのデータ構造
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
        createdAt: "2026-08-01T10:00:00Z",
    }
]

// タスクのリストを表示するための要素を取得
const taskListEl = document.getElementById("task-list");
// タスクを表示する関数
function renderTasks() {
    taskListEl.innerHTML = "";
    tasks.forEach(function (task) {
        //　タスクのタイトルを表示するリストアイテムを作成
        const li = document.createElement("li");
        li.textContent = task.title;
        // 編集ボタンを作成
        const editBtn = document.createElement("button");
        editBtn.textContent = "編集";
        // 編集ボタンのクリックイベントを設定
        editBtn.addEventListener("click", function () {
            const newTitle = prompt("新しいタスク名を入力してください");
            if (newTitle) {
                task.title = newTitle;
                renderTasks();
            }
        });
        // 削除ボタンを作成
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        // 削除ボタンのクリックイベントを設定
        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter((t) => t.id !== task.id);
            renderTasks();
        });
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskListEl.appendChild(li);
    });
}
// 初期表示
renderTasks();

// タスク追加ボタンのクリックイベントを設定
const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", function () {
    const title = prompt("タスク名を入力してください");
    const deadline = prompt("締め切りを入力してください (YYYY-MM-DD)");
    const duration = prompt("所要時間を入力してください (例: 30min)");
    const location = prompt("場所を入力してください");
    const task = {
        id: crypto.randomUUID(),
        title: title,
        deadline: deadline,
        duration: duration,
        location: location,
        completed: false,
        assigned: false,
        scheduledDate: null,
        scheduledStartHour: null,
        createdAt: new Date().toISOString(),
    };
    tasks.push(task);
    renderTasks();
});

