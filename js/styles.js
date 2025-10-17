const openPopUp = document.querySelector(".task-add__btn");
const closePopUp = document.querySelector(".close");
const popUp = document.querySelector(".task__modal-window");

openPopUp.addEventListener("click", function (event) {
  event.preventDefault();
  popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});
