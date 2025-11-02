import {addHeader} from "./components/header";

document.body.onload = addElement;
const app = document.getElementById("app");

let style = document.createElement("style");
document.getElementsByTagName("head")[0].insertAdjacentElement("beforeend", style);

function addElement() {
  addHeader()
}
