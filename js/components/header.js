export function addHeader(styleAdd) {
  const header = document.createElement("header");
  const headerContainer = document.createElement("div");
  const mainTitle = document.createElement("h1");

  header.style.marginBottom = "23px";

  headerContainer.style.paddingTop = "48px";
  headerContainer.style.textAlign = "center";

  mainTitle.style.fontWeight = "500";
  mainTitle.style.fontSize = "26px";
  mainTitle.style.lineHeight = "100%";

  headerContainer.classList.add("container");

  mainTitle.innerText = "TODO LIST";

  // Add DOM tree
  app.insertAdjacentElement("afterbegin", header);
  header.insertAdjacentElement("afterbegin", headerContainer);
  headerContainer.insertAdjacentElement("afterbegin", mainTitle);
}
