// 今日の日付を表示する
const today = new Date();
const dateElement = document.getElementById("todayDate");
dateElement.textContent = today.toLocaleDateString("ja-JP");

// HTMLの要素を取得する
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const progressRate = document.getElementById("progressRate");
const completedCount = document.getElementById("completedCount");

//達成率や完了件数を計算する処理
function updateProgress(){
  const totalTasks = taskList.children.length;
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

  function setupCheckbox(checkbox){
    checkbox.addEventListener("change", function(){
      const li = checkbox.parenetElement;
      if(checkbox.chrked){
        li.style.textDecoration = "none";
      }
      
  updateProgress();
    });
  }

  const checkboxes = taskList.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function(checkbox){
    setupCheckbox(checkbox);
  });

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

 setupCheckbox(checkbox);

  // リスト項目にチェックボックスと文字を追加する
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(taskText));

  // タスクリストに追加する
  taskList.appendChild(li);

  // 入力欄を空にする
  taskInput.value = "";

  updateProgress();
});

updateProgress()
