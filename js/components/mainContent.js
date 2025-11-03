import { addToolbar } from "./toolbar.js"

export function addMainContent() {
    const main = document.createElement("main")
    app.insertAdjacentElement("beforeend", main)

    addToolbar(main)
}
