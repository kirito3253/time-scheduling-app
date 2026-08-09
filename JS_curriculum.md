# タスク管理アプリのための JavaScript 最低限基礎カリキュラム(5日間)

## このカリキュラムについて

- **目的**: タスク管理アプリの実装に入る前に、必要最低限のJavaScript基礎を身につける
- **期間**: 5日間(1日1〜2時間目安)
- **方針**: このカリキュラムに出てくる例題・演習は、すべて「タスク管理アプリで実際に使う形」に寄せてあります。ここで書いたコードの多くは、本番の実装でほぼそのまま再利用できます
- **進め方**: 各日の「解説」を読む → 「例題」を自分で写経して動かす → 「演習」を解く → 「解答例」と見比べる

### 準備するもの

1. ブラウザ(Chrome推奨)
2. エディタ(VS Code推奨)
3. 練習用フォルダを1つ作り、`practice.html` を作成して以下を貼り付ける

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>JS練習</title>
</head>
<body>
  <h1>JS練習ページ</h1>
  <script src="practice.js"></script>
</body>
</html>
```

4. 同じフォルダに `practice.js` を作成する。ここに毎日のコードを書く
5. `practice.html` をブラウザで開き、**F12キー(開発者ツール)→ Console タブ**を開く。`console.log()` の結果はここに表示される

> **重要な習慣**: エラーが出たらConsoleの赤い文字を読む癖をつけましょう。「何行目で」「何というエラーか」が必ず書いてあります。

---

# Day 1: 変数・データ型・配列・オブジェクト

## 1-1. 変数(`const` と `let`)

変数は「値に名前をつけて保存する箱」です。

```js
const appName = "タスク管理アプリ"; // 再代入しない値は const
let count = 0;                      // 後で変更する値は let
count = count + 1;                  // let なら再代入できる
console.log(appName, count);        // → タスク管理アプリ 1
```

- **基本は `const` を使い、再代入が必要なときだけ `let`** にします
- `var` という古い書き方もありますが、使いません

## 1-2. データ型

タスク管理アプリで使う型は主に4つです。

```js
const title = "資料作成";      // 文字列(string)
const startHour = 9;           // 数値(number)
const completed = false;       // 真偽値(boolean): true か false
const scheduledDate = null;    // null: 「値がない」ことを表す
```

要件定義書のタスクオブジェクトを見ると、まさにこの4つの型でできていることが分かります。

## 1-3. 配列

複数の値を順番に並べて持つデータです。**タスク一覧は配列で管理します**。

```js
const durations = ["15min", "30min", "1hour", "2hour+"];

console.log(durations[0]);      // → 15min (先頭は0番目!)
console.log(durations.length);  // → 4 (要素数)

durations.push("3hour+");       // 末尾に追加
console.log(durations.length);  // → 5
```

> `const` で宣言した配列でも、中身の追加・削除はできます。禁止されるのは `durations = 別の配列` のような「変数自体への再代入」だけです。

## 1-4. オブジェクト

「名前(キー)と値」のペアをまとめたデータです。**タスク1件はオブジェクトで表現します**。

```js
const task = {
  id: "task-001",
  title: "資料作成",
  deadline: "2026-08-15",
  duration: "30min",
  location: "anywhere",
  completed: false,
};

// 値の取り出し(ドット記法)
console.log(task.title);     // → 資料作成
console.log(task.completed); // → false

// 値の変更
task.completed = true;
console.log(task.completed); // → true
```

## 1-5. 配列 + オブジェクト = タスク一覧

この組み合わせが、アプリのデータ構造そのものです。

```js
const tasks = [
  { id: "task-001", title: "資料作成", duration: "30min", completed: false },
  { id: "task-002", title: "買い物",   duration: "1hour", completed: true },
];

console.log(tasks[0].title);      // → 資料作成
console.log(tasks[1].completed);  // → true
console.log(tasks.length);        // → 2
```

## Day 1 演習

**演習1-1**: 自分の好きなタスクを表す変数を作ってください。
- `title`(文字列)、`deadline`(文字列)、`completed`(真偽値)の3つの変数を `const` で作り、`console.log` で3つとも表示する

**演習1-2**: 次のオブジェクトを作り、指定の操作をしてください。
1. `title` が `"部屋の掃除"`、`duration` が `"1hour"`、`location` が `"home"`、`completed` が `false` のオブジェクト `myTask` を作る
2. `console.log` で `myTask.title` を表示する
3. `myTask.completed` を `true` に変更し、もう一度 `myTask` 全体を `console.log` で表示する

**演習1-3**: タスクオブジェクトを2件以上入れた配列 `tasks` を作ってください(中身は自由)。そのうえで:
1. 1件目のタスクのタイトルを表示する
2. `tasks` に3件目のタスクを `push` で追加する
3. `tasks.length` を表示する

<details>
<summary>解答例(クリックで開く)</summary>

```js
// 演習1-1
const title = "ゴミ出し";
const deadline = "2026-08-10";
const completed = false;
console.log(title, deadline, completed);

// 演習1-2
const myTask = {
  title: "部屋の掃除",
  duration: "1hour",
  location: "home",
  completed: false,
};
console.log(myTask.title);
myTask.completed = true;
console.log(myTask);

// 演習1-3
const tasks = [
  { title: "資料作成", duration: "30min" },
  { title: "買い物", duration: "1hour" },
];
console.log(tasks[0].title);
tasks.push({ title: "メール返信", duration: "15min" });
console.log(tasks.length); // → 3
```
</details>

---

# Day 2: 関数・条件分岐・ループ・配列メソッド

## 2-1. 関数

処理に名前をつけて、何度でも呼び出せるようにしたものです。

```js
// 基本の書き方
function greet(name) {
  return "こんにちは、" + name + "さん";
}
console.log(greet("霧")); // → こんにちは、霧さん

// アロー関数(短い書き方。後述の配列メソッドで多用します)
const greet2 = (name) => {
  return "こんにちは、" + name + "さん";
};
```

- `name` のようなカッコ内の変数を**引数**、`return` で返す値を**戻り値**と呼びます

## 2-2. テンプレートリテラル

文字列の中に変数を埋め込む書き方です。`+` でつなぐより読みやすく、HTML生成でも活躍します。

```js
const taskTitle = "資料作成";
const deadline = "2026-08-15";
console.log(`「${taskTitle}」の締切は ${deadline} です`);
// → 「資料作成」の締切は 2026-08-15 です
```

バッククォート( \` )で囲み、`${変数}` で埋め込むのがポイントです。

## 2-3. 条件分岐(if)

```js
const task = { title: "資料作成", completed: false, location: "home" };

if (task.completed) {
  console.log("完了済みです");
} else {
  console.log("未完了です");
}

// 比較演算子は === を使う(== は使わない)
if (task.location === "home") {
  console.log("自宅でやるタスクです");
}

// 複数条件: && (かつ) / || (または)
if (task.completed === false && task.location === "home") {
  console.log("未完了かつ自宅タスク");
}

// 否定: !
if (!task.completed) {
  console.log("!task.completed は「未完了なら」という意味");
}
```

## 2-4. ループ(繰り返し)

```js
const tasks = [
  { title: "資料作成", completed: false },
  { title: "買い物", completed: true },
  { title: "メール返信", completed: false },
];

// for...of : 配列の全要素を順に処理する
for (const task of tasks) {
  console.log(task.title);
}
```

## 2-5. 配列メソッド(このアプリの主役)

タスクの絞り込み・検索・並び替えは、すべて配列メソッドで書けます。**Day 2で一番重要なパートです**。

### filter: 条件に合う要素だけを集めた新しい配列を作る

```js
const tasks = [
  { title: "資料作成", completed: false, location: "home" },
  { title: "買い物",   completed: true,  location: "out" },
  { title: "読書",     completed: false, location: "anywhere" },
];

// 未完了タスクだけに絞り込む
const incompleteTasks = tasks.filter((task) => task.completed === false);
console.log(incompleteTasks.length); // → 2
```

これは画面1(今すぐ)の「未割り当て・未完了タスクを絞り込む」処理そのものです。

### find: 条件に合う最初の1件を探す

```js
const found = tasks.find((task) => task.title === "買い物");
console.log(found); // → { title: "買い物", ... }
```

「IDからタスクを1件探して編集する」処理で使います。

### map: 全要素を変換した新しい配列を作る

```js
const titles = tasks.map((task) => task.title);
console.log(titles); // → ["資料作成", "買い物", "読書"]
```

### sort: 並び替え

```js
const tasksWithDeadline = [
  { title: "A", deadline: "2026-08-20" },
  { title: "B", deadline: "2026-08-10" },
  { title: "C", deadline: "2026-08-15" },
];

// 締切が近い順(文字列のYYYY-MM-DDは辞書順=日付順で比較できる)
tasksWithDeadline.sort((a, b) => a.deadline.localeCompare(b.deadline));
console.log(tasksWithDeadline.map((t) => t.title)); // → ["B", "C", "A"]
```

「提案時は締切が近い順で並び替え」の実装で使います。

## Day 2 演習

**演習2-1**: 引数 `duration`(`"15min"` などの文字列)を受け取り、日本語表記(`"15分"` など)を返す関数 `formatDuration` を作ってください。対応表: `"15min"→"15分"` / `"30min"→"30分"` / `"1hour"→"1時間"` / `"2hour+"→"2時間以上"`。if文の連続でOKです。

**演習2-2**: 次のタスク配列を使って、以下を順に実行してください。

```js
const tasks = [
  { title: "資料作成", completed: false, assigned: false, location: "home",     deadline: "2026-08-20" },
  { title: "買い物",   completed: false, assigned: true,  location: "out",      deadline: "2026-08-10" },
  { title: "読書",     completed: true,  assigned: false, location: "anywhere", deadline: "2026-08-15" },
  { title: "筋トレ",   completed: false, assigned: false, location: "home",     deadline: "2026-08-12" },
];
```

1. 未完了(`completed === false`)のタスクだけを `filter` で取り出す
2. さらに未割当(`assigned === false`)の条件も加えて絞り込む
3. その結果を締切が近い順に `sort` する
4. `map` でタイトルだけの配列にして `console.log` する(期待結果: `["筋トレ", "資料作成"]`)

**演習2-3(重要・アプリの核心ロジック)**: 関数 `suggestTasks(tasks, availableLocation)` を作ってください。
- 引数: タスク配列と、いまいる場所(`"home"` / `"out"`)
- 戻り値: 「未完了・未割当」かつ「`location` が引数と一致 **または** `"anywhere"`」のタスクを、締切が近い順に並べた配列
- 演習2-2の配列で `suggestTasks(tasks, "home")` を実行し、結果を確認する

<details>
<summary>解答例(クリックで開く)</summary>

```js
// 演習2-1
function formatDuration(duration) {
  if (duration === "15min") return "15分";
  if (duration === "30min") return "30分";
  if (duration === "1hour") return "1時間";
  if (duration === "2hour+") return "2時間以上";
  return "不明";
}
console.log(formatDuration("30min")); // → 30分

// 演習2-2
const step1 = tasks.filter((t) => t.completed === false);
const step2 = step1.filter((t) => t.assigned === false);
step2.sort((a, b) => a.deadline.localeCompare(b.deadline));
const titles = step2.map((t) => t.title);
console.log(titles); // → ["筋トレ", "資料作成"]

// 演習2-3
function suggestTasks(tasks, availableLocation) {
  const candidates = tasks.filter(
    (t) =>
      !t.completed &&
      !t.assigned &&
      (t.location === availableLocation || t.location === "anywhere")
  );
  candidates.sort((a, b) => a.deadline.localeCompare(b.deadline));
  return candidates;
}
console.log(suggestTasks(tasks, "home"));
```

演習2-3が解ければ、**画面1「今すぐ」の提案ロジックの土台はもう完成しています**。
</details>

---

# Day 3: DOM操作(画面をJavaScriptで動かす)

## 3-1. DOMとは

HTMLの各要素(タグ)を、JavaScriptから読み書きできるようにした仕組みです。「タスクを追加したら一覧に表示される」といった動きは、すべてDOM操作で作ります。

今日は `practice.html` の `<body>` を次のように書き換えて進めてください。

```html
<body>
  <h1>タスク一覧(練習)</h1>

  <input type="text" id="task-input" placeholder="タスク名を入力">
  <button id="add-button">追加</button>

  <ul id="task-list"></ul>

  <script src="practice.js"></script>
</body>
```

> `<script>` タグが `body` の**一番下**にあるのが重要です。HTMLが読み込まれた後にJSが実行されるため、要素が確実に見つかります。

## 3-2. 要素を取得する: querySelector

```js
// CSSセレクタと同じ書き方で要素を1つ取得する
const input = document.querySelector("#task-input");   // id は #
const button = document.querySelector("#add-button");
const list = document.querySelector("#task-list");

console.log(input); // → <input type="text" id="task-input" ...>
```

## 3-3. イベントを待ち受ける: addEventListener

「ボタンが押されたら○○する」を実現します。

```js
button.addEventListener("click", () => {
  console.log("ボタンが押されました!");
});
```

- 第1引数: イベント名(`"click"`, `"change"`, `"submit"` など)
- 第2引数: イベント発生時に実行する関数

## 3-4. 入力値を読む: value

```js
button.addEventListener("click", () => {
  const text = input.value; // 入力欄の現在の文字列
  console.log(`入力されたのは: ${text}`);
});
```

## 3-5. 要素を作って追加する: createElement / appendChild

```js
button.addEventListener("click", () => {
  const text = input.value;
  if (text === "") return; // 空なら何もしない(ガード節)

  const li = document.createElement("li"); // <li>を作る
  li.textContent = text;                   // 文字を入れる
  list.appendChild(li);                    // <ul>の中に追加する

  input.value = ""; // 入力欄を空に戻す
});
```

ここまで書いて動かすと、「入力→追加ボタン→リストに表示」という**タスク管理アプリの原型**が動きます。

## 3-6. 一覧をまとめて描画し直す(重要パターン)

実際のアプリでは「配列の中身を、毎回ぜんぶ描画し直す」パターンをよく使います。データ(配列)と見た目(DOM)がズレないので、初心者には特におすすめの設計です。

```js
const tasks = []; // データはこの配列だけで管理する

function renderTasks() {
  list.innerHTML = ""; // いったん全部消す
  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.title;
    list.appendChild(li);
  }
}

button.addEventListener("click", () => {
  if (input.value === "") return;
  tasks.push({ title: input.value, completed: false }); // 1. データを変更
  renderTasks();                                        // 2. 描画し直す
  input.value = "";
});
```

> **「データを変更 → renderで描画し直す」の2ステップ**は、このアプリ全体を貫く基本パターンです。必ず身につけてください。

## Day 3 演習

**演習3-1**: 3-6のコードを写経して動かしてください。そのうえで `console.log(tasks)` を追加ボタンの処理の最後に入れ、押すたびに配列が増えていくことをConsoleで確認する。

**演習3-2**: 各 `<li>` に「削除」ボタンを付けてください。
- ヒント1: `renderTasks` の中で `li` ごとに `const delBtn = document.createElement("button")` を作り、`delBtn.textContent = "削除"`、`li.appendChild(delBtn)` で追加する
- ヒント2: `delBtn.addEventListener("click", ...)` の中で、配列から該当タスクを取り除いて `renderTasks()` を呼ぶ
- ヒント3: 取り除くには `tasks.splice(index, 1)` を使う。`for...of` の代わりに `tasks.forEach((task, index) => { ... })` を使うと `index` が手に入る

**演習3-3(発展)**: 各 `<li>` にチェックボックス(`<input type="checkbox">`)を付け、チェックすると `task.completed` が切り替わり、完了タスクのタイトルに取り消し線が付くようにしてください。
- ヒント1: `checkbox.checked = task.completed` で状態を反映できる
- ヒント2: `checkbox.addEventListener("change", ...)` の中で `task.completed = checkbox.checked` にして `renderTasks()`
- ヒント3: 取り消し線は `li.style.textDecoration = "line-through"` で付けられる

<details>
<summary>解答例(クリックで開く)</summary>

```js
const input = document.querySelector("#task-input");
const button = document.querySelector("#add-button");
const list = document.querySelector("#task-list");

const tasks = [];

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    // 演習3-3: チェックボックス
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    li.appendChild(checkbox);

    // タイトル
    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) {
      span.style.textDecoration = "line-through";
    }
    li.appendChild(span);

    // 演習3-2: 削除ボタン
    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

button.addEventListener("click", () => {
  if (input.value === "") return;
  tasks.push({ title: input.value, completed: false });
  renderTasks();
  input.value = "";
});
```

この演習3-3まで動けば、**画面2「タスク一覧」の骨格はほぼ完成形**です。
</details>

---

# Day 4: JSONとlocalStorage(データを保存する)

## 4-1. なぜ必要か

Day 3までのコードは、ページを再読み込みするとタスクが全部消えます。配列がメモリ上にしかないためです。**localStorage** に保存すれば、ブラウザを閉じてもデータが残ります。

## 4-2. JSONとは

JavaScriptのオブジェクト・配列を「文字列」として表現する形式です。localStorageは**文字列しか保存できない**ので、配列⇔文字列の変換が必要になります。

```js
const tasks = [{ title: "資料作成", completed: false }];

// 配列 → JSON文字列
const jsonText = JSON.stringify(tasks);
console.log(jsonText); // → '[{"title":"資料作成","completed":false}]'(ただの文字列)

// JSON文字列 → 配列
const restored = JSON.parse(jsonText);
console.log(restored[0].title); // → 資料作成(オブジェクトに戻っている)
```

## 4-3. localStorageの基本3操作

```js
// 保存: setItem(キー, 文字列)
localStorage.setItem("tasks", JSON.stringify(tasks));

// 読み込み: getItem(キー) → 文字列 or null
const saved = localStorage.getItem("tasks");

// 削除
localStorage.removeItem("tasks");
```

> 開発者ツールの **Application タブ → Local Storage** で、実際に保存された中身を見られます。デバッグに便利なので必ず一度見てください。

## 4-4. 定番パターン: 保存関数と読み込み処理

```js
// 保存用の関数
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ページ読み込み時の復元
// 初回はgetItemがnullを返すので、その場合は空配列にする
const saved = localStorage.getItem("tasks");
const tasks = saved ? JSON.parse(saved) : [];

// ※ `A ? B : C` は三項演算子。「Aが真ならB、偽ならC」という意味
```

あとは「**データを変更するたびに `saveTasks()` を呼ぶ**」だけです。

```js
button.addEventListener("click", () => {
  if (input.value === "") return;
  tasks.push({ title: input.value, completed: false });
  saveTasks();    // ← 追加
  renderTasks();
  input.value = "";
});
```

## Day 4 演習

**演習4-1**: Day 3の演習3-3のコードに localStorage を組み込み、再読み込みしてもタスクが消えないようにしてください。変更点は次の3つだけです。
1. `const tasks = []` を「localStorageから復元するコード」に置き換える
2. `saveTasks()` 関数を作る
3. データを変更している場所すべて(追加・削除・チェック切替)で `saveTasks()` を呼ぶ

**演習4-2**: 開発者ツールのApplicationタブでlocalStorageの中身を確認し、保存されているJSON文字列を読んでみてください。その後、右クリック→削除でデータを消し、再読み込みで一覧が空になることも確認する。

**演習4-3(考える問題)**: `JSON.parse(localStorage.getItem("tasks"))` を、保存前(初回アクセス時)に実行するとどうなるでしょうか?予想してからConsoleで試してください。

<details>
<summary>解答例(クリックで開く)</summary>

```js
// 演習4-1(変更箇所のみ)
const saved = localStorage.getItem("tasks");
const tasks = saved ? JSON.parse(saved) : [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 追加時
tasks.push({ title: input.value, completed: false });
saveTasks();
renderTasks();

// 削除時
tasks.splice(index, 1);
saveTasks();
renderTasks();

// チェック切替時
task.completed = checkbox.checked;
saveTasks();
renderTasks();

// 最後に初回描画を忘れずに(復元したデータを表示するため)
renderTasks();
```

**演習4-3の答え**: `getItem` が `null` を返し、`JSON.parse(null)` は `null` になります(エラーにはなりませんが、`null.length` などにアクセスした瞬間にエラーになります)。だからこそ `saved ? JSON.parse(saved) : []` のようなnullチェックが必須、というのがこの問題の狙いです。
</details>

---

# Day 5: 総合演習 — ミニタスクアプリを1から作る

最終日は、何も見ずに(詰まったときだけDay 1〜4を見返して)小さなアプリを完成させます。**これが完成すれば、本番の実装に入る準備は完了です。**

## 要件

新しいフォルダに `index.html` と `app.js` を作り、以下を満たすアプリを作ってください。

1. タスク名の入力欄と「追加」ボタンがある
2. タスクは `{ id, title, completed, createdAt }` のオブジェクトとして配列で管理する
   - `id` は `crypto.randomUUID()` で生成(本番の要件定義書と同じ方式)
   - `createdAt` は `new Date().toISOString()` で生成
3. 追加したタスクは一覧に表示される
4. 各タスクにチェックボックスがあり、完了/未完了を切り替えられる(完了は取り消し線)
5. 各タスクに削除ボタンがある
6. データはlocalStorageに保存され、再読み込みしても消えない
7. **(発展)** 一覧の上に「すべて / 未完了のみ」の切替ボタンを付け、`filter` で表示を絞り込めるようにする

## 完成チェックリスト

- [ ] 追加・削除・完了切替が動く
- [ ] 再読み込みしてもデータが残る
- [ ] Consoleにエラーが出ていない
- [ ] `renderTasks()` パターン(データ変更→保存→再描画)で書けている
- [ ] (発展)絞り込み表示が動く

<details>
<summary>解答例(クリックで開く)</summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ミニタスクアプリ</title>
</head>
<body>
  <h1>ミニタスクアプリ</h1>
  <input type="text" id="task-input" placeholder="タスク名">
  <button id="add-button">追加</button>
  <div>
    <button id="filter-all">すべて</button>
    <button id="filter-active">未完了のみ</button>
  </div>
  <ul id="task-list"></ul>
  <script src="app.js"></script>
</body>
</html>
```

```js
// app.js
const input = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#task-list");
const filterAllBtn = document.querySelector("#filter-all");
const filterActiveBtn = document.querySelector("#filter-active");

const saved = localStorage.getItem("tasks");
const tasks = saved ? JSON.parse(saved) : [];

let filterMode = "all"; // "all" | "active"

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";

  const visibleTasks =
    filterMode === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks;

  for (const task of visibleTasks) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });
    li.appendChild(checkbox);

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) span.style.textDecoration = "line-through";
    li.appendChild(span);

    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.addEventListener("click", () => {
      // idで探して削除(indexよりも安全な方法)
      const idx = tasks.findIndex((t) => t.id === task.id);
      tasks.splice(idx, 1);
      saveTasks();
      renderTasks();
    });
    li.appendChild(delBtn);

    list.appendChild(li);
  }
}

addButton.addEventListener("click", () => {
  if (input.value === "") return;
  tasks.push({
    id: crypto.randomUUID(),
    title: input.value,
    completed: false,
    createdAt: new Date().toISOString(),
  });
  saveTasks();
  renderTasks();
  input.value = "";
});

filterAllBtn.addEventListener("click", () => {
  filterMode = "all";
  renderTasks();
});

filterActiveBtn.addEventListener("click", () => {
  filterMode = "active";
  renderTasks();
});

renderTasks(); // 初回描画
```
</details>

---

# 修了後: 本番実装との対応表

このカリキュラムで学んだことが、要件定義書のどこにつながるかの対応表です。

| 学んだこと | 本番で使う場所 |
|---|---|
| 配列 + オブジェクト | 6.1 タスクオブジェクトのデータ構造 |
| filter / sort | 3.2 タスク提案機能(絞り込み・締切順) |
| 演習2-3の `suggestTasks` | 画面1「今すぐ」の提案ロジックの土台 |
| データ変更→保存→再描画パターン | 全画面共通の設計方針 |
| Day 5のミニアプリ | 画面2「タスク一覧」の原型 |
| localStorage(key="tasks") | 6.1 データ保存方式そのもの |

## 本番実装で「その都度」学べばよいもの(今は不要)

- **Drag and Drop API** → カレンダー機能(実装順3番)に着手する直前に学ぶ
- **モーダルの作り方** → タスク一覧画面の追加・編集フォーム実装時に学ぶ
- **タブ切り替え** → 画面構成を作るときに学ぶ(実はDay 5の絞り込みボタンと同じ発想でできます)
- **Dateオブジェクトの詳細**(現在時刻の取得・比較) → 「今やるタスク」判定の実装時に学ぶ

## 参考リソース

- MDN Web Docs(JavaScript公式リファレンス): 分からないメソッドが出たら「MDN filter」のように検索
- 開発者ツールのConsole: 迷ったらまず `console.log` で中身を見る癖を

お疲れさまでした!Day 5まで完走できたら、いよいよ本番の実装(タスク管理CRUD)に進みましょう。
