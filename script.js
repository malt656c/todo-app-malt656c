import { newTask, updateCounter } from "./scripts/newTask.js";
import { onRefresh } from "./scripts/onRefresh.js";
import { colorPicker } from "./scripts/interactivity.js";
import { addToLocalStorage } from "./scripts/localStorage.js";

const addTaskBtn = document.querySelector("#newTaskBtn");
addTaskBtn.addEventListener("click", addNewTask);

function addNewTask(evt) {
  evt.preventDefault();
  const inputName = evt.target.parentElement.querySelector("input");
  const inputDesc = evt.target.parentElement.querySelector("textarea");
  /* laver et unikt id */
  const uniqueId = Date.now();
  /* laver et object ud fra vores værdier*/
  const taskObject = {
    id: uniqueId,
    name: inputName.value,
    desc: inputDesc.value,
    color: addTaskSelect.value,
    done: false,
  };
  console.log(addToLocalStorage(taskObject));
  /* sender vores object til newTask funktionen og appender html elementet det får retur */
  document.querySelector("#todoListContent").appendChild(newTask(taskObject));
  updateCounter();

  /* resetter vores input */
  inputName.value = "";
  inputDesc.value = "";
  console.log(taskObject);
}

const addTaskSelect = document.querySelector("#taskColorPicker");
addTaskSelect.addEventListener("change", colorPicker);

onRefresh();
