function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = taskText;
      taskList.appendChild(newTask);
      taskInput.value = '';
  }
}
