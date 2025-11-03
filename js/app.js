import { addHeader } from "./components/header.js";
import { addMainContent } from "./components/mainContent.js";
import { addToolbar } from "./components/toolbar.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  addHeader();
  addMainContent();
});

// function addElement() {
// }
