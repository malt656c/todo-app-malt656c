import { updateLocalStorage, deleteLocalStorage, addToLocalStorage } from "./localStorage.js";


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
  /* event tilføjes til luk-knappen, som sletter vores element fra DOM'en, samt sletter vores objekt fra localStorage og opdaterer task-antal indikatoren */
  clone.querySelector(".closeBtn").addEventListener("click", (event) => {
    deleteLocalStorage(task);
    event.target.parentElement.remove();
    updateCounter();
  });
/* event tilføjes til checkboxen, som ændrer "done" parameteren på vores objekt, opdaterer objektet i localStorage og flytter det tjekkede element til den korrekte liste*/
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
/* returnerer den udfyldte template */
  return clone;
}

/* lister der rykker element frem og tilbage mellem todo og done listerne */
function check(event) {
  /* definerer elementet der skal rykke liste */
  let task = event.target.parentElement.parentElement;
  /* tjekker om checkboxen er krydset af, rykker elementet til den rigtige liste og giver elementet den rigtige dertilhørende style */
  if (event.target.checked == true) {
    document.getElementById("doneListContent").appendChild(task);
    task.querySelector("p").style.filter = "opacity(50%)";
  } else if (event.target.checked == false) {
    document.getElementById("todoListContent").appendChild(task);
    task.querySelector("p").style.filter = "opacity(100%)";
  }
  /* opdaterer task antal tælleren */
  updateCounter();
}

export function updateCounter() {
    /* opdaterer task antal tælleren til mængden af børn i todo listen */
  document.querySelector("#itemAmount").textContent = document.querySelector("#todoListContent").children.length;
}
