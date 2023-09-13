import { updateCounter, newTask } from "./newTask.js";
import { retrieveLocalStorage } from "./localStorage.js";

export function onRefresh() {
  /* opdaterer select elementets farve */
  const addTaskSelect = document.querySelector("#taskColorPicker");
  addTaskSelect.style.setProperty("--bg_clr", `var(--${addTaskSelect.value}_clr)`);
  /* henter localStorage som array */
  let StorageArray = retrieveLocalStorage();
  if (StorageArray !== null && StorageArray !== undefined) {
    /* tjekker om det hentede array er tomt */
    StorageArray.forEach((item) => {
      if (item.done == false) {
        const toDoItem = newTask(item);
        document.querySelector("#todoListContent").appendChild(toDoItem);
      } else if (item.done == true) {
        const doneItem = newTask(item);
        doneItem.querySelector("input").checked = true;
        doneItem.querySelector("p").style.filter = "opacity(50%)";
        document.querySelector("#doneListContent").appendChild(doneItem);
      }
    });
  } else {
    console.log("empty");
  }
/* opdaterer task antal tælleren */
  updateCounter();
}
