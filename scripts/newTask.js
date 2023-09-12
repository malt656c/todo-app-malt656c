import { retrieveLocalStorage, addToLocalStorage, updateLocalStorage, deleteLocalStorage } from "./localStorage.js";
export function newTask(task) {
  /* diffinition og kloning af template*/
  let taskTemplate = document.querySelector("#taskTemplate").content;
  const clone = taskTemplate.cloneNode(true);
  /* indsætning af vores objects værdier i vores template og påsætter vores task til todo-listen*/
  clone.querySelector(".task").setAttribute("id", task.id);
  clone.querySelector(".task").style.setProperty("--bg_clr", `var(--${task.color}_clr)`);
  clone.querySelector("input").setAttribute("id", "input_" + task.id);
  clone.querySelector("label").setAttribute("for", "input_" + task.id);
  clone.querySelector("label").textContent = task.name;
  clone.querySelector("p").textContent = task.desc;
  clone.querySelector(".closeBtn").addEventListener("click", (event) => {
    deleteLocalStorage(task);
    event.target.parentElement.remove();
    updateCounter();
  });

  clone.querySelector("input").addEventListener("click", (event) => {
    if (task.done == false) {
      task.done = true;
      updateLocalStorage(task);
      console.log(task);
    } else if (task.done == true) {
      task.done = false;
      updateLocalStorage(task);
      console.log(task);
    }
    check(event);
  });

  return clone;
}
function check(event) {
  let task = event.target.parentElement.parentElement;
  if (event.target.checked == true) {
    document.getElementById("doneListContent").appendChild(task);
    task.querySelector("p").style.filter = "opacity(50%)";
  } else if (event.target.checked == false) {
    document.getElementById("todoListContent").appendChild(task);
    task.querySelector("p").style.filter = "opacity(100%)";
  }
  updateCounter();
}

export function updateCounter() {
  document.querySelector("#itemAmount").textContent = document.querySelector("#todoListContent").children.length;
}
