const addBtn = document.querySelector(".task__modal-window-btn--bg-puple");
const taskList = document.querySelector(".task__list");
const emptyItem = document.querySelector(".empty__item");

// События
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", (event) => {
  if (event.target.dataset.action === "delete") {
    const parentNode = event.target.closest(".task__item");
    parentNode.remove();
  }

  if (taskList.children.length == 1) {
    emptyItem.classList.remove("none");
  }
});

// Функции
function addTask() {
  const inputValue = document.querySelector(".task__modal-window-input").value;

  taskList.insertAdjacentHTML(
    "beforeend",
    `<li class="task__item">
							<div class="task__left-content">
								<input
									type="checkbox"
									name="done"
									id="done"
									class="task__checkbox"
								/>
								<h3 class="task__title">${inputValue}</h3>
							</div>
							<div class="task__right-content">
								<button class="pencil btn--reset task__btn" data-action='edit'>
									<svg
										width="20"
										height="20"
										viewBox="0 0 15 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="pencil__icon"
									>
										<path
											d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
											stroke="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</button>
								<button class="trash btn--reset task__btn " data-action='delete'>
									<svg
										width="20"
										height="20"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="trash__icon"
									>
										<path
											d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z"
											stroke="none"
										/>
										<path
											d="M14.625 3.75H3.375"
											stroke="none"
											stroke-linecap="round"
										/>
										<path
											d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
											stroke="none"
										/>
										<path
											d="M10.5 9V12.75"
											stroke="none"
											stroke-linecap="round"
										/>
										<path
											d="M7.5 9V12.75"
											stroke="none"
											stroke-linecap="round"
										/>
									</svg>
								</button>
							</div>
						</li>`
  );

  if (taskList.children.length == 2) {
    emptyItem.classList.add("none");
  }

  popUp.classList.remove("active");
}
