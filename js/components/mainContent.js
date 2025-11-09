import { addToolbar } from "./toolbar.js"
import { addToDoList } from "./task.js"

export function addMainContent() {
    const main = document.createElement("main")
    app.insertAdjacentElement("beforeend", main)

    addToolbar(main)
    addToDoList(main)
}
