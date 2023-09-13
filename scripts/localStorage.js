/* henter localStorage og laver det til et array */
let storageArray = JSON.parse(localStorage.getItem("taskListArray"));

export function addToLocalStorage(item) {
  /* tjekker om localStorage er tomt eller ej */
  if (storageArray == null) {
    /* definerer storageArray som et tomt array hvis localStorage er tomt */
    storageArray=[];
    /* indsætter vores object til storageArray */
    storageArray.push(item);
    /* skubber storageArray til localStorage */
    localStorage.setItem("taskListArray", JSON.stringify(storageArray));
    console.log(item, "addToLocalStorage, storagearray=null", storageArray)
    /* returner vores storageArray */
    return storageArray;
  } else if (storageArray !== null) {
    /* hvis localStorage ikke er tomt, definerer vi vores storageArray som vores localStorage i JSON format */
    let storageArray = JSON.parse(localStorage.getItem("taskListArray"));
        /* indsætter vores object til storageArray */
    storageArray.push(item);
        /* skubber storageArray til localStorage */
    localStorage.setItem("taskListArray", JSON.stringify(storageArray));
    console.log(item, "addToLocalStorage, storagearray!=null", storageArray)
        /* returner vores storageArray */
    return storageArray;
  }
  console.log(item, "addToLocalStorage")
}
/* funktion der henter localStorage når siden loades */
export function retrieveLocalStorage() {
  if (localStorage.getItem("taskListArray") === null) {
    console.log("localStorage is empty")
  } else if (localStorage.getItem("taskListArray") !== null) {
    let storageArray = JSON.parse(localStorage.getItem("taskListArray"));
    console.log(storageArray, "retrieved")
    /* returner vores storageArray til funktionen der caller den */
    return storageArray;
  }
}
/* funktion der opdaterer vores storageArray og skubber det til localStorage*/
export function updateLocalStorage(object) {
storageArray = JSON.parse(localStorage.getItem("taskListArray"));
  /* finder vores objects position i vores storageArray */
  let itemInStorage = storageArray.findIndex((item) => item.id === object.id);
  console.log(itemInStorage, storageArray[itemInStorage])
  /* erstatter de gamle værdier for vores object med de nye værdier */
  storageArray.splice(itemInStorage, 1, object);
  /* skubber det opdaterede array til localStorage */
  localStorage.setItem("taskListArray", JSON.stringify(storageArray));
  console.log(object, "updated in",storageArray);
}

export function deleteLocalStorage(object) {
 /* finder vores objects position i vores storageArray */
  let itemInStorage = storageArray.findIndex((item) => item.id == object.id);
    /* erstatter de gamle værdier for vores object med de nye værdier */
  storageArray.splice(itemInStorage, 1);
    /* skubber det opdaterede array til localStorage */
  localStorage.setItem("taskListArray", JSON.stringify(storageArray));
  console.log(object, "deleted in",storageArray);
}
