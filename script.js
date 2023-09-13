import { newTask, updateCounter } from "./scripts/newTask.js";
import { onRefresh } from "./scripts/onRefresh.js";
import { colorPicker } from "./scripts/interactivity.js";
import { addToLocalStorage} from "./scripts/localStorage.js";

/* giver "+" knappen en click event, der caller addNewTask funktionen */
const addTaskBtn = document.querySelector("#newTaskBtn");
addTaskBtn.addEventListener("click", addNewTask);


const addTaskSelect = document.querySelector("#taskColorPicker");
addTaskSelect.addEventListener("change", colorPicker);

function addNewTask(evt) {
  /* definitioner og undergår at input værdierne bliver sat som en URL parameter */
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
  /* sender vores object til newTask funktionen og appender html elementet det får retur */
  document.querySelector("#todoListContent").appendChild(newTask(taskObject));
  /* tilføjer vores object til localStorage */
  addToLocalStorage(taskObject)
  /* opdaterer tallet der indikerer hvor mange tasks der er på todo listen */
  updateCounter();

  /* resetter vores input */
  inputName.value = "";
  inputDesc.value = "";
  console.log(taskObject);
}

/* caller onRefresh funktionen som henter og indsætter objekterne fra localStorage */
onRefresh();
