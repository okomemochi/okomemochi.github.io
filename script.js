// 今日の日付を表示する
const today = new Date();
const dateElement = document.getElementById("todayDate");
dateElement.textContent = today.toLocaleDateString("ja-JP");

// HTMLの要素を取得する
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const progressRate = documentl.getElementById("progressRate");
const completedCount = document.getElementById("completedCount");

//達成率や完了件数を計算する処理
function updateProgress(){
  const checkedTasks = taskList.querySelectorAll("input:checked").length;
  //達成率の計算
  let rate = 0;
  if(totalTasks > 0){
    rate = Math.round((checkedTasks/totalTasks)*100);
}

  //HTMLへ結果を表示
  progressRate.textContent = rate;
  completedCount.textContent = checkedTasks;
}

// ボタンを押したときの処理
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value;

  // 入力欄が空なら処理を終了する
  if (taskText === "") {
    return;
  }

  // 新しいリスト項目を作る
  const li = document.createElement("li");

  // チェックボックスを作る
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // チェックしたときの処理
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }

    updateProgress()
  });

  // リスト項目にチェックボックスと文字を追加する
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(taskText));

  // タスクリストに追加する
  taskList.appendChild(li);

  // 入力欄を空にする
  taskInput.value = "";
});
