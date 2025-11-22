export function addTask(parentTag, taskAddButton, list) {
  const taskModalWindow = document.createElement("article");
  const taskModalWindowContainer = document.createElement("div");
  const taskModalWindowBody = document.createElement("div");
  const taskModalWindowTitle = document.createElement("h2");
  const taskModalWindowInput = document.createElement("input");
  const taskModalWindowButtons = document.createElement("div");
  const taskModalWindowButtonClose = document.createElement("button");
  const taskModalWindowButtonAdd = document.createElement("button");

  // Style

  taskModalWindow.style.display = "none";
  taskModalWindow.style.width = "100%";
  taskModalWindow.style.height = "100%";
  taskModalWindow.style.backgroundColor = "transparent";
  taskModalWindow.style.position = "fixed";
  taskModalWindow.style.left = "0";
  taskModalWindow.style.top = "0";
  taskModalWindow.style.zIndex = "2";
  taskModalWindow.style.transform = "translateY(-44.5%) scale(0)";
  taskModalWindow.style.backgroundColor = "var(--modal-window-bgc)";
  taskModalWindow.style.transition = "all 0.3s ease-in-out";

  taskModalWindowContainer.style.display = "flex";
  taskModalWindowContainer.style.width = "100%";
  taskModalWindowContainer.style.height = "100%";
  taskModalWindowContainer.style.padding = "15px";

  taskModalWindowBody.style.display = "flex";
  taskModalWindowBody.style.flexDirection = "column";
  taskModalWindowBody.style.alignItems = "center";
  taskModalWindowBody.style.maxWidth = "530px";
  taskModalWindowBody.style.width = "100%";
  taskModalWindowBody.style.height = "290px";
  taskModalWindowBody.style.padding = "18px 30px";
  taskModalWindowBody.style.margin = "auto";
  taskModalWindowBody.style.borderRadius = "16px";
  taskModalWindowBody.style.backgroundColor = "var(--white)";

  taskModalWindowTitle.style.fontSize = "24px";
  taskModalWindowTitle.style.lineHeight = "100%";
  taskModalWindowTitle.style.fontWeight = "400";
  taskModalWindowTitle.style.marginBottom = "25px";

  taskModalWindowInput.classList.add("task__modal-window-input");
  taskModalWindowInput.placeholder = "Input your note...";
  taskModalWindowInput.style.width = "100%";
  taskModalWindowInput.style.border = "1px solid var(--purple)";
  taskModalWindowInput.style.borderRadius = "var(--toolbar-radius)";
  taskModalWindowInput.style.marginBottom = "auto";
  taskModalWindowInput.style.padding = "11px 16px";
  taskModalWindowInput.style.lineHeight = "100%";
  taskModalWindowInput.style.fontSize = "16px";
  taskModalWindowInput.style.transition =
    "outline 0.3s ease-in-out, outline-offset 0.2s ease-in-out";

  taskModalWindowButtons.style.display = "flex";
  taskModalWindowButtons.style.justifyContent = "space-between";
  taskModalWindowButtons.style.width = "100%";

  taskModalWindowButtonClose.style.padding = "10px 22px";
  taskModalWindowButtonClose.style.border = "1px solid var(--purple)";
  taskModalWindowButtonClose.style.borderRadius = "var(--toolbar-radius)";
  taskModalWindowButtonClose.style.fontSize = "18px";
  taskModalWindowButtonClose.style.lineHeight = "100%";
  taskModalWindowButtonClose.style.color = "var(--purple)";
  taskModalWindowButtonClose.style.textTransform = "uppercase";
  taskModalWindowButtonClose.style.backgroundColor = "transparent";

  // taskModalWindowButtonAdd.classList.add("add-task")
  taskModalWindowButtonAdd.style.padding = "10px 22px";
  taskModalWindowButtonAdd.style.border = "1px solid var(--purple)";
  taskModalWindowButtonAdd.style.borderRadius = "var(--toolbar-radius)";
  taskModalWindowButtonAdd.style.fontSize = "18px";
  taskModalWindowButtonAdd.style.lineHeight = "100%";
  taskModalWindowButtonAdd.style.color = "var(--white)";
  taskModalWindowButtonAdd.style.textTransform = "uppercase";
  taskModalWindowButtonAdd.style.backgroundColor = "var(--purple)";

  // Tag content

  taskModalWindowTitle.innerText = "New Note";
  taskModalWindowButtonClose.innerText = "Cancel";
  taskModalWindowButtonAdd.innerText = "Apply";

  // Inner in HTML

  parentTag.insertAdjacentElement("beforeend", taskModalWindow);
  taskModalWindow.insertAdjacentElement("afterbegin", taskModalWindowContainer);
  taskModalWindowContainer.insertAdjacentElement(
    "afterbegin",
    taskModalWindowBody
  );
  taskModalWindowBody.insertAdjacentElement("afterbegin", taskModalWindowTitle);
  taskModalWindowBody.insertAdjacentElement("beforeend", taskModalWindowInput);
  taskModalWindowBody.insertAdjacentElement(
    "beforeend",
    taskModalWindowButtons
  );
  taskModalWindowButtons.insertAdjacentElement(
    "afterbegin",
    taskModalWindowButtonClose
  );
  taskModalWindowButtons.insertAdjacentElement(
    "beforeend",
    taskModalWindowButtonAdd
  );

  taskAddButton.addEventListener("click", () => {
    taskModalWindow.style.display = "block";
    taskModalWindow.style.transform = "translateY(0%) scale(1)";
    taskModalWindow.style.backgroundColor = "var(--modal-window-bgc)";
  });

  taskModalWindowButtonClose.addEventListener("click", () => {
    taskModalWindow.style.display = "none";
    taskModalWindow.style.transform = "translateY(-44.5%) scale(0)";
    taskModalWindow.style.backgroundColor = "var(--modal-window-bgc)";
  });

  const taskItem = document.createElement("li");
  const leftContent = document.createElement("div");
  const checkbox = document.createElement("input");
  const taskTitle = document.createElement("h3");
  const rightContent = document.createElement("div");
  const buttonEdit = document.createElement("button");
  const buttonEditIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const buttonEditIconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const buttonTrash = document.createElement("button");
  const buttonTrashIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const buttonTrashIconPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const buttonTrashIconPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const buttonTrashIconPath3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const buttonTrashIconPath4 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const buttonTrashIconPath5 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  taskModalWindowButtonAdd.addEventListener("click", () => {
    taskTitle.innerText = taskModalWindowInput.value

    list.insertAdjacentElement("afterbegin", taskItem);
    taskItem.insertAdjacentElement("beforeend", leftContent);
    taskItem.insertAdjacentElement("beforeend", rightContent);

    leftContent.insertAdjacentElement("afterbegin", checkbox);
    leftContent.insertAdjacentElement("beforeend", taskTitle);

    rightContent.insertAdjacentElement("afterbegin", buttonEdit);
    buttonEdit.insertAdjacentElement("afterbegin", buttonEditIcon);
    buttonEditIcon.insertAdjacentElement("afterbegin", buttonEditIconPath);
    rightContent.insertAdjacentElement("beforeend", buttonTrash);
    buttonTrash.insertAdjacentElement("afterbegin", buttonTrashIcon);
    buttonTrashIcon.insertAdjacentElement("afterbegin", buttonTrashIconPath1);
    buttonTrashIcon.insertAdjacentElement("beforeend", buttonTrashIconPath2);
    buttonTrashIcon.insertAdjacentElement("beforeend", buttonTrashIconPath3);
    buttonTrashIcon.insertAdjacentElement("beforeend", buttonTrashIconPath4);
    buttonTrashIcon.insertAdjacentElement("beforeend", buttonTrashIconPath5);

    taskItem.classList.add("task__item");
    taskItem.style.display = "flex";
    taskItem.style.alignItems = "center";
    taskItem.style.padding = "10px";
    taskItem.style.transition = "background-color 0.3s ease-in-out";

    leftContent.style.display = "flex";
    leftContent.style.alignItems = "center";
    leftContent.style.gap = "17px";
    leftContent.style.marginRight = "auto";

    checkbox.classList.add("task__checkbox");
    checkbox.type = "checkbox";
    checkbox.name = "done";
    checkbox.id = "done";

    taskTitle.classList.add("task__title");
    taskTitle.style.textTransform = "uppercase";
    taskTitle.style.fontSize = "20px";
    taskTitle.style.lineHeight = "100%";
    taskTitle.style.fontWeight = "400";

    rightContent.style.display = "flex";
    rightContent.style.alignItems = "center";
    rightContent.style.gap = "10px";

    buttonEdit.classList.add("btn--reset", "pencil");
    buttonEdit.dataset.action = "edit";
    buttonEdit.style.width = "18px";
    buttonEdit.style.height = "18px";

    buttonEditIcon.classList.add("pencil__icon");
    buttonEditIcon.setAttribute("width", "20");
    buttonEditIcon.setAttribute("height", "20");
    buttonEditIcon.setAttribute("viewBox", "0 0 15 14");
    buttonEditIcon.setAttribute("fill", "none");
    buttonEditIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    buttonEditIconPath.setAttribute(
      "d",
      "M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
    );
    buttonEditIconPath.setAttribute("stroke", "none");
    buttonEditIconPath.setAttribute("stroke-linecap", "round");
    buttonEditIconPath.setAttribute("stroke-linejoin", "round");

    buttonTrash.classList.add("trash", "btn--reset");
    buttonTrash.dataset.action = "trash";
    buttonTrash.style.width = "18px";
    buttonTrash.style.height = "18px";

    buttonTrashIcon.classList.add("trash__icon");
    buttonTrashIcon.setAttribute("width", "20");
    buttonTrashIcon.setAttribute("height", "20");
    buttonTrashIcon.setAttribute("viewBox", "0 0 18 18");
    buttonTrashIcon.setAttribute("fill", "none");
    buttonTrashIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    buttonTrashIconPath1.setAttribute(
      "d",
      "M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z"
    );
    buttonTrashIconPath1.setAttribute("stroke", "none");

    buttonTrashIconPath2.setAttribute("d", "M14.625 3.75H3.375");
    buttonTrashIconPath2.setAttribute("stroke", "none");
    buttonTrashIconPath2.setAttribute("stroke-linecap", "round");

    buttonTrashIconPath3.setAttribute(
      "d",
      "M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
    );
    buttonTrashIconPath3.setAttribute("stroke", "none");

    buttonTrashIconPath4.setAttribute("d", "M10.5 9V12.75");
    buttonTrashIconPath4.setAttribute("stroke", "none");
    buttonTrashIconPath4.setAttribute("stroke-linecap", "round");

    buttonTrashIconPath5.setAttribute("d", "M7.5 9V12.75");
    buttonTrashIconPath5.setAttribute("stroke", "none");
    buttonTrashIconPath5.setAttribute("stroke-linecap", "round");

    taskModalWindowInput.value = "";

    if (list.children.length == 2) {
      document.querySelector(".empty-item").classList.add("none");
    }

    taskModalWindow.style.display = "none";
    taskModalWindow.style.transform = "translateY(-44.5%) scale(0)";
    taskModalWindow.style.backgroundColor = "var(--modal-window-bgc)";
  });

  list.addEventListener("click", (event) => {
    if (event.target.dataset.action === "trash") {
      const parentNode = event.target.closest(".task__item");
      parentNode.remove();
    }

    if (list.children.length == 1) {
      document.querySelector(".empty-item").classList.remove("none");
    }
  });
}
