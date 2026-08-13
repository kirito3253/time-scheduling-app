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

        // チェックボックスを作成
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        // チェックボックスの変更イベントを設定
        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            renderTasks();
        });
        li.appendChild(checkbox);

        // タスクのタイトルを表示するspan要素を作成
        const span = document.createElement("span");
        span.textContent = task.title;
        if (task.completed) {
            span.style.textDecoration = "line-through";
        }
        li.appendChild(span);

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
        li.appendChild(editBtn);

        // 削除ボタンを作成
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        // 削除ボタンのクリックイベントを設定
        deleteBtn.addEventListener("click", function () {
            tasks = tasks.filter((t) => t.id !== task.id);
            renderTasks();
        });
        li.appendChild(deleteBtn);

        taskListEl.appendChild(li);
    });
}

// タブを切り替える関数
function showTab(tabId) {
    const allTabs = document.querySelectorAll(".tab-content");
    allTabs.forEach((tab) => {
        tab.style.display = "none";
    });
    const tab = document.getElementById(tabId);
    tab.style.display = "block";
}

// 今すぐボタンのクリックイベントを設定
const nowBtn = document.getElementById("tab-btn-now");
nowBtn.addEventListener("click", function () {
    showTab("tab-now");
});

// タスク一覧ボタンのクリックイベントを設定
const tasklistBtn = document.getElementById("tab-btn-tasklist");
tasklistBtn.addEventListener("click", function () {
    showTab("tab-tasklist");
    renderTasks();
});

// カレンダーボタンのクリックイベントを設定
const calendarBtn = document.getElementById("tab-btn-calendar");
calendarBtn.addEventListener("click", function () {
    showTab("tab-calendar");
});

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

const DURATION_TO_MINUTES = {
  "15min": 15,
  "30min": 30,
  "1hour": 60,
  "2hour+": 120,
};

const suggestTaskBtn = document.getElementById("suggest-task-btn");
suggestTaskBtn.addEventListener("click", function () {
    const selectedDuration = document.getElementById("duration-select").value;
    const selectedLocation = document.getElementById("location-select").value;

    const suggestTask = document.getElementById("task-suggestion");
    suggestTask.innerHTML = "";
    const li = document.createElement("li");

    let possibleTasks = tasks.filter((t) => t.assigned === false && t.completed === false);
    possibleTasks.sort((a, b) => {
        if (a.deadline < b.deadline) {
            return -1;
        } else if (a.deadline > b.deadline) {
            return 1;
        } else {
            return 0;
        }
    });
    possibleTasks = possibleTasks.filter((t) => t.location === selectedLocation || t.location === "anywhere");
    possibleTasks = possibleTasks.filter((t) => DURATION_TO_MINUTES[t.duration] <= DURATION_TO_MINUTES[selectedDuration]);

    if  (possibleTasks.length === 0) {
        li.textContent = "該当するタスクがありません";
    } else {    
        li.textContent = possibleTasks[0].title;
    }
    suggestTask.appendChild(li)
});

// 初期表示
showTab("tab-now");