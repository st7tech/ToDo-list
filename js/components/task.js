import { addTask } from "./modalWindow.js";

export function addToDoList(parentTag, body) {
  const taskSection = document.createElement("section");
  const taskMainContainer = document.createElement("div");
  const taskList = document.createElement("ul");
  const taskEmptyItem = document.createElement("li");
  const taskEmptyItemIcon = document.createElement("img");
  const taskEmptyItemTitle = document.createElement("h2");
  const taskAddButton = document.createElement("button");
  const taskAddButtonIcon = document.createElement("img");

  // Style
  taskMainContainer.classList.add("container");

  taskList.classList.add("list--reset");
  taskList.style.maxWidth = "550px";
  taskList.style.padding = "0 15px";
  taskList.style.margin = "0 auto";

  taskEmptyItem.classList.add("empty-item")
  taskEmptyItem.style.display = "flex";
  taskEmptyItem.style.alignItems = "center";
  taskEmptyItem.style.flexDirection = "column";
  taskEmptyItem.style.justifyContent = "center";
  taskEmptyItem.style.gap = "20px";

  taskEmptyItemIcon.style.width = "221px";
  taskEmptyItemIcon.style.height = "174px";

  taskEmptyItemTitle.style.fontSize = "20px";
  taskEmptyItemTitle.style.lineHeight = "100%";
  taskEmptyItemTitle.style.fontWeight = "400";

  taskAddButton.style.position = "absolute";
  taskAddButton.style.top = "350px";
  taskAddButton.style.right = "40px";
  taskAddButton.style.padding = "11px";
  taskAddButton.style.border = "2px solid var(--purple";
  taskAddButton.style.borderRadius = "10%";
  taskAddButton.style.backgroundColor = "var(--purple)";
  taskAddButton.style.webkitBoxShadow =
    "0px 0px 28px 6px rgba(108, 99, 255, 0.65)";
  taskAddButton.style.mozBoxShadow =
    "0px 0px 28px 6px rgba(108, 99, 255, 0.65)";
  taskAddButton.style.boxShadow = "0px 0px 28px 6px rgba(108, 99, 255, 0.65)";

  // Tag content
  taskEmptyItemIcon.src = "../../img/empty-icon.svg";
  taskEmptyItemIcon.alt = "Пусто";

  taskAddButtonIcon.src = "../../img/plus.svg";
  taskAddButtonIcon.alt = "Добавить";

  taskEmptyItemTitle.innerText = "Empty...";

  parentTag.insertAdjacentElement("beforeend", taskSection);
  taskSection.insertAdjacentElement("afterbegin", taskMainContainer);
  taskMainContainer.insertAdjacentElement("afterbegin", taskList);
  taskList.insertAdjacentElement("afterbegin", taskEmptyItem);
  taskEmptyItem.insertAdjacentElement("afterbegin", taskEmptyItemIcon);
  taskEmptyItem.insertAdjacentElement("beforeend", taskEmptyItemTitle);

  taskMainContainer.insertAdjacentElement("beforeend", taskAddButton);
  taskAddButton.insertAdjacentElement("afterbegin", taskAddButtonIcon);

  addTask(taskSection, taskAddButton, taskList)
}
