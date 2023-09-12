let storageArray = JSON.parse(localStorage.getItem("taskListArray"));
export function addToLocalStorage(item) {
  if (localStorage.getItem("taskListArray") == null) {
    storageArray.push(item);
    localStorage.setItem("taskListArray", JSON.stringify(storageArray));
    return storageArray;
  } else if (localStorage.getItem("taskListArray") !== null) {
    let storageArray = JSON.parse(localStorage.getItem("taskListArray"));
    storageArray.push(item);
    localStorage.setItem("taskListArray", JSON.stringify(storageArray));
    return storageArray;
  }
}
export function retrieveLocalStorage() {
  if (localStorage.getItem("taskListArray") == null) {
  } else if (localStorage.getItem("taskListArray") !== null) {
    let storageArray = JSON.parse(localStorage.getItem("taskListArray"));
    return storageArray;
  }
}
export function updateLocalStorage(object) {
  let itemInStorage = storageArray.findIndex((item) => item.id == object.id);
  storageArray.splice(itemInStorage, 1, object);
  localStorage.setItem("taskListArray", JSON.stringify(storageArray));
  console.log(storageArray);
}
export function deleteLocalStorage(object) {
  let itemInStorage = storageArray.findIndex((item) => item.id == object.id);
  storageArray.splice(itemInStorage, 1);
  localStorage.setItem("taskListArray", JSON.stringify(storageArray));
}
